import type { FilterProps } from './../options';

export default function createPropFilter(
  props: { [key: string]: any },
  filter: FilterProps,
): (key: string) => boolean {
  if (Array.isArray(filter)) {
    return (key: string) => filter.indexOf(key) === -1;
  } else {
    return (key: string) => filter(props[key], key);
  }
}
