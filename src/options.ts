import type { ReactElement } from 'react';
import type { ReactElementTreeNode } from './tree';

export type FilterPropsFunction = (value: any, key: string) => boolean;
export type FilterProps = string[] | FilterPropsFunction;

export interface PropsState<V = any> {
  value: V;
  inline: boolean;
  lvl: number;
}

export type FormatPropsFunction<V = any> = (
  props: PropsState<V> & {
    name: string;
    fallback: (state: PropsState) => string;
    context?: { node: ReactElementTreeNode };
  }
) => string;

export type FormatProps =
  | FormatPropsFunction
  | Record<string, FormatPropsFunction>;

export type Options = {
  filterProps: FilterProps;
  formatProps: FormatProps;
  functions: Record<string, string>;
  showDefaultProps: boolean;
  showFunctions: boolean;
  functionValue?: Function;
  tabStop: number;
  useBooleanShorthandSyntax: boolean;
  useFragmentShortSyntax: boolean;
  sortProps: boolean;
  maxInlineAttributesLineLength?: number;
  displayName?: (element: ReactElement) => string;
};

export type PublicOptions = Partial<Options>;
