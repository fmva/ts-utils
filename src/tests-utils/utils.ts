export type Assert<T extends true> = T;
export type Equal<X, Y> = [X, Y] extends [Y, X] ? true : false;
export type NotEqual<X, Y> = true extends Equal<X, Y> ? false : true;
export type EqualUnions<Type, Union> = Extract<Type, Union> extends never
  ? false
  : true;
export type NotEqualUnions<Type, Union> = true extends EqualUnions<Type, Union>
  ? false
  : true;
