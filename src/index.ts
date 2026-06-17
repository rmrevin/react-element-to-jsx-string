import type { ReactElement, ReactNode } from 'react';
import formatTree from './formatter/formatTree';
import type { Options, PublicOptions } from './options';
import parseReactElement from './parser/parseReactElement';

const reactElementToJsxString = (
  element: ReactNode,
  {
    filterProps = [],
    formatProps = {},
    functions = {},
    showDefaultProps = true,
    showFunctions = false,
    functionValue,
    tabStop = 2,
    useBooleanShorthandSyntax = true,
    useFragmentShortSyntax = true,
    sortProps = true,
    maxInlineAttributesLineLength,
    displayName,
  }: PublicOptions = {},
): string => {
  if (!element) {
    throw new Error('react-element-to-jsx-string: Expected a ReactElement');
  }

  const options: Options = {
    filterProps,
    formatProps,
    functions,
    showDefaultProps,
    showFunctions,
    functionValue,
    tabStop,
    useBooleanShorthandSyntax,
    useFragmentShortSyntax,
    sortProps,
    maxInlineAttributesLineLength,
    displayName,
  };

  return formatTree(
    parseReactElement(
      element as ReactElement | string | number | Function,
      options,
    ),
    options,
  );
};

export default reactElementToJsxString;

export {
  inlineFunction,
  preserveFunctionLineBreak,
} from './formatter/formatFunction';
export type { PublicOptions as Options, FilterPropsFunction, FormatPropsFunction } from './options';
