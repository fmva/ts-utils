import { AnyObject, SnakeToCamel } from '../helpers/helpers';

/**
 * DeepSnakeToCamel
 * @desc Deep converting properties of an object from snake to camel format
 */
export type DeepSnakeToCamel<T> = T extends any[]
  ? T[number] extends object
    ? {
        [K in keyof T[number] as K extends string
          ? SnakeToCamel<K>
          : K]: DeepSnakeToCamel<T[number][K]>;
      }[]
    : T
  : T extends undefined
  ? undefined
  : T extends object
  ? {
      [K in keyof T as K extends string
        ? SnakeToCamel<K>
        : K]: DeepSnakeToCamel<T[K]>;
    }
  : T;

/**
 * PropertyPostfix
 * @desc add postfix to an original object type
 */
export type PropertyPostfix<
  TObject extends AnyObject,
  postfix extends string,
> = {
  [K in keyof TObject as `${string & K}${postfix}`]: TObject[K];
};

/**
 * PropertyPrefix
 * @desc add prefix to an original object type
 */
export type PropertyPrefix<TObject extends AnyObject, prefix extends string> = {
  [K in keyof TObject as `${prefix}${Capitalize<string & K>}`]: TObject[K];
};
