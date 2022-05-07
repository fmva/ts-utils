/**
 * AnyObject<TValues>
 * @desc represent an object type
 */
export type AnyObject<TValues = unknown> = Record<
  string | number | symbol,
  TValues
>;

/**
 * KeyValuePairs<TValue>
 * @desc represent an obvious object where properties are string
 */
export type KeyValuePairs<TValue = string> = Record<string, TValue>;

/**
 * SnakeToCamel<S>
 * @desc Convert string from snake to camel
 */
export type SnakeToCamel<S extends string> =
  S extends `${infer Head}_${infer Tail}`
    ? `${Head}${Capitalize<SnakeToCamel<Tail>>}`
    : S;

/**
 * ValueOf<T>
 * @desc extract all types from structure
 */
export type ValueOf<T> = T[keyof T];

/**
 * EmptyObject
 * @desc Empty object
 */
export type EmptyObject = { [K in string | number]: never };

/**
 * IsTuple<TArray>
 * @desc An array is a tuple or not
 */
export type IsTuple<TArray extends ReadonlyArray<any>> =
  number extends TArray['length'] ? false : true;

/**
 * TupleKey<TArray>
 * @desc get the tuple key from a tuple
 */
export type TupleKey<TArray extends ReadonlyArray<any>> = Exclude<
  keyof TArray,
  keyof any[]
>;

/**
 * PathTemplate<TPath, T>
 * @desc template for the ObjectPath generic
 */
type PathTemplate<TPath extends string | number, T> = T extends object
  ? `${TPath}` | `${TPath}.${ObjectPath<T>}`
  : `${TPath}`;

/**
 * ObjectPath<T>
 * @desc get all property paths from the object
 */
export type ObjectPath<T> = T extends ReadonlyArray<infer U>
  ? IsTuple<T> extends true
    ? { [P in TupleKey<T>]-?: PathTemplate<P & string, T[P]> }[TupleKey<T>]
    : PathTemplate<number, U>
  : T extends object
  ? { [P in keyof T]-?: PathTemplate<P & string, T[P]> }[keyof T]
  : never;
