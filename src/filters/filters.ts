/**
 * PropertyPathTypeOf
 * @desc extract type from a property by string chain format
 */
export type PropertyPathTypeOf<T, Path extends string> = Path extends keyof T
  ? T[Path]
  : Path extends `${infer K}.${infer R}`
  ? K extends keyof T
    ? PropertyPathTypeOf<T[K], R>
    : never
  : never;
