/**
 * AnyObject
 * @desc represent an object type
 */
export type AnyObject<TValues = unknown> = Record<
  string | number | symbol,
  TValues
>;

/**
 * KeyValuePairs
 * @desc represent an obvious object where properties are string
 */
export type KeyValuePairs<TValue = string> = Record<string, TValue>;

/**
 * SnakeToCamel
 * @desc Convert string from snake to camel
 */
export type SnakeToCamel<S extends string> =
  S extends `${infer Head}_${infer Tail}`
    ? `${Head}${Capitalize<SnakeToCamel<Tail>>}`
    : S;

/**
 * ValueOf
 * @desc extract all types from structure
 */
export type ValueOf<T> = T[keyof T];
