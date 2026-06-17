import type { Options } from './../options';

function noRefCheck() {}

export const inlineFunction = (fn: any): string =>
  fn
    .toString()
    .split('\n')
    .map(line => line.trim())
    .join('');

export const preserveFunctionLineBreak = (fn: any): string => fn.toString();

const defaultFunctionValue = inlineFunction;

export default (fn: Function, options: Options): any => {
  const { functionValue = defaultFunctionValue, showFunctions, functions } = options;
  if (!showFunctions && functionValue === defaultFunctionValue) {
    return functionValue(noRefCheck);
  }

  if (functions[fn.name]) return functions[fn.name]

  return functionValue(fn);
};
