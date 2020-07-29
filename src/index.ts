/**
 * This comment _supports_ [Markdown](https://marked.js.org/)
 *
 * ```typescript
 * // Or you can specify the language explicitly
 * const instance = new MyClass();
 * ```
 *
 * Standard links:
 * {@link Foo} or {@linkplain Foo} or [[Foo]]
 *
 * Code links: (Puts Foo inside <code> tags)
 * {@linkcode Foo} or [[`Foo`]]
 *
 * @typeParam T  Comment for type `T`.
 * You may also use the template tag.
 * @template T comment for type `T`.
 *
 * @param a  Comment for parameter ´text´.
 * @param b Comment for parameter ´text´.
 * @returns      Comment for special return value.
 *
 * demo for sum
 *
 * ```ts
 *  import { sum } from './sdk'
 * sum(1, 2) === 3
 * ```
 */
export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

export const minus = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('minus');
  }
  return a - b;
};
