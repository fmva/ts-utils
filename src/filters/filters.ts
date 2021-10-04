/**
 * TypeOfPropertyPath
 * @desc get type from a property by string chain format
 */
export type TypeOfPropertyPath<T, Path extends string> = Path extends keyof T
  ? T[Path]
  : Path extends `${infer K}.${infer R}`
  ? K extends keyof T
    ? TypeOfPropertyPath<T[K], R>
    : never
  : never;
