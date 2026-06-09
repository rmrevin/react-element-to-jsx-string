import formatTree from './formatter/formatTree';
import parseReactElement from './parser/parseReactElement';
import type { ReactElement, ReactNode } from 'react';
import type { Options, PublicOptions } from './options';

const reactElementToJsxString = (
  element: ReactNode,
  {
    filterProps = [],
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
    parseReactElement(element as ReactElement | string | number, options),
    options,
  );
};

export default reactElementToJsxString;

export {
  inlineFunction,
  preserveFunctionLineBreak,
} from './formatter/formatFunction';
export type { PublicOptions as Options } from './options';
