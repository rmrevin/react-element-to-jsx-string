import type { Key, ReactElement, ReactNode } from 'react';
import React, { Fragment } from 'react';
import {
  ForwardRef,
  isContextConsumer,
  isContextProvider,
  isForwardRef,
  isLazy,
  isMemo,
  isProfiler,
  isStrictMode,
  isSuspense,
  Memo,
} from 'react-is';
import type { Options } from './../options';
import type { TreeNode } from './../tree';
import {
  createFunctionTreeNode,
  createNumberTreeNode,
  createReactElementTreeNode,
  createReactFragmentTreeNode,
  createStringTreeNode,
} from './../tree';

const supportFragment = Boolean(Fragment);

type Props = { [key: string]: any };
type ReactComponentLike = {
  $$typeof?: symbol;
  displayName?: string;
  name?: string;
  render?: ReactComponentLike;
  type?: ReactComponentLike;
};

type ReactElementLike = ReactElement & {
  type: any;
  props: Props;
  key: Key | null;
};
type ReactElementChild = ReactElement | string | number | Function;

const getFunctionTypeName = (functionType: ReactComponentLike): string => {
  if (!functionType.name || functionType.name === '_default') {
    return 'No Display Name';
  }
  return functionType.name;
};

const getWrappedComponentDisplayName = (Component: ReactComponentLike): string => {
  switch (true) {
    case Boolean(Component.displayName):
      return Component.displayName || '';
    case Component.$$typeof === Memo:
      return getWrappedComponentDisplayName(Component.type as ReactComponentLike);
    case Component.$$typeof === ForwardRef:
      return getWrappedComponentDisplayName(Component.render as ReactComponentLike);
    default:
      return getFunctionTypeName(Component);
  }
};

// heavily inspired by:
// https://github.com/facebook/react/blob/3746eaf985dd92f8aa5f5658941d07b6b855e9d9/packages/react-devtools-shared/src/backend/renderer.js#L399-L496
const getReactElementDisplayName = (element: ReactElement): string => {
  const elementLike = element as ReactElementLike;

  switch (true) {
    case typeof elementLike.type === 'string':
      return elementLike.type;
    case typeof elementLike.type === 'function':
      if (elementLike.type.displayName) {
        return elementLike.type.displayName;
      }
      return getFunctionTypeName(elementLike.type);
    case isForwardRef(element):
    case isMemo(element):
      return getWrappedComponentDisplayName(elementLike.type);
    case isContextConsumer(element):
      return `${elementLike.type._context.displayName || 'Context'}.Consumer`;
    case isContextProvider(element):
      return `${elementLike.type.displayName || 'Context'}.Provider`;
    case Boolean(elementLike.type.displayName):
      return elementLike.type.displayName;
    case isLazy(element):
      return 'Lazy';
    case isProfiler(element):
      return 'Profiler';
    case isStrictMode(element):
      return 'StrictMode';
    case isSuspense(element):
      return 'Suspense';
    default:
      return 'UnknownElementType';
  }
};

const noChildren = (_propsValue: any, propName: string) => propName !== 'children';

const onlyMeaningfulChildren = (children: ReactNode | Function): boolean =>
  children !== true &&
  children !== false &&
  children !== null &&
  children !== undefined &&
  children !== '';

const toChildrenArray = (
  children: ReactNode | Function,
): Array<ReactNode | Function> => {
  if (children === null || children === undefined) {
    return [];
  }

  if (Array.isArray(children)) {
    return children.reduce<Array<ReactNode | Function>>(
      (acc, child) => acc.concat(toChildrenArray(child)),
      [],
    );
  }

  return [children];
};

const filterProps = (originalProps: Props, cb: (value: any, key: string) => boolean): Props => {
  const filteredProps: Props = {};

  Object.keys(originalProps)
    .filter(key => cb(originalProps[key], key))
    .forEach(key => (filteredProps[key] = originalProps[key]));

  return filteredProps;
};

const parseReactElement = (
  element: ReactElementChild,
  options: Options,
): TreeNode => {
  const { displayName: displayNameFn = getReactElementDisplayName } = options;

  if (typeof element === 'string') {
    return createStringTreeNode(element);
  } else if (typeof element === 'number') {
    return createNumberTreeNode(element);
  } else if (typeof element === 'function') {
    return createFunctionTreeNode(element);
  } else if (!React.isValidElement(element)) {
    throw new Error(
      `react-element-to-jsx-string: Expected a React.Element, got \`${typeof element}\``,
    );
  }

  const displayName = displayNameFn(element);

  const elementLike = element as ReactElementLike;
  const props = filterProps(elementLike.props, noChildren);

  const key = elementLike.key;
  if (typeof key === 'string' && key.search(/^\./)) {
    // React automatically add key=".X" when there are some children
    props.key = key;
  }

  const defaultProps = filterProps(elementLike.type.defaultProps || {}, noChildren);
  const childrens = toChildrenArray(elementLike.props.children)
    .filter(onlyMeaningfulChildren)
    .map(child => parseReactElement(child as ReactElementChild, options));

  if (supportFragment && elementLike.type === Fragment) {
    return createReactFragmentTreeNode(key, childrens);
  }

  return createReactElementTreeNode(
    displayName,
    props,
    defaultProps,
    childrens,
  );
};

export default parseReactElement;
