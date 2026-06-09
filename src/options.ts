import type { ReactElement } from 'react';

export type FilterPropsFunction = (value: any, key: string) => boolean;
export type FilterProps = string[] | FilterPropsFunction;

export type Options = {
  filterProps: FilterProps;
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
