import type { ReactElementTreeNode } from '../tree';
import type { Options, PropsState } from './../options';
import formatPropValue from './formatPropValue';
import spacer from './spacer';

type FormattedProp = {
  attributeFormattedInline: string;
  attributeFormattedMultiline: string;
  isMultilineAttribute: boolean;
};

export default (
  name: string,
  hasValue: boolean,
  value: any,
  hasDefaultValue: boolean,
  defaultValue: any,
  inline: boolean,
  lvl: number,
  options: Options,
  context?: { node: ReactElementTreeNode }
): FormattedProp => {
  if (!hasValue && !hasDefaultValue) {
    throw new Error(
      `The prop "${name}" has no value and no default: could not be formatted`
    );
  }

  const usedValue = hasValue ? value : defaultValue;

  const { useBooleanShorthandSyntax, tabStop, formatProps } = options;

  const formattedPropValue = (() => {
    const fallback = (state: PropsState) =>
      formatPropValue(state.value, state.inline, state.lvl, options);

    if (typeof formatProps === 'function') {
      return formatProps({ name, value: usedValue, inline, lvl, context, fallback });
    }

    if (
      typeof formatProps === 'object' &&
      formatProps !== null &&
      (formatProps[name] || formatProps._)
    ) {
      return (formatProps[name] ?? formatProps._)({
        name,
        value: usedValue,
        inline,
        lvl,
        context,
        fallback,
      });
    }

    return fallback({ value: usedValue, inline, lvl });
  })();

  let attributeFormattedInline = ' ';
  let attributeFormattedMultiline = `\n${spacer(lvl + 1, tabStop)}`;
  const isMultilineAttribute = formattedPropValue.includes('\n');

  if (
    useBooleanShorthandSyntax &&
    formattedPropValue === '{false}' &&
    !hasDefaultValue
  ) {
    // If a boolean is false and not different from it's default, we do not render the attribute
    attributeFormattedInline = '';
    attributeFormattedMultiline = '';
  } else if (useBooleanShorthandSyntax && formattedPropValue === '{true}') {
    attributeFormattedInline += `${name}`;
    attributeFormattedMultiline += `${name}`;
  } else {
    attributeFormattedInline += `${name}=${formattedPropValue}`;
    attributeFormattedMultiline += `${name}=${formattedPropValue}`;
  }

  return {
    attributeFormattedInline,
    attributeFormattedMultiline,
    isMultilineAttribute,
  };
};
