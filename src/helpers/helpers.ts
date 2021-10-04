/**
 * AnyObject
 * @desc model an object type
 */
export type AnyObject = Record<string | number | symbol, unknown>;

/**
 * KeyValuePairs
 * @desc Get an obvious object where properties are string
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
 * @desc get all types from values
 */
export type ValueOf<T> = T[keyof T];
