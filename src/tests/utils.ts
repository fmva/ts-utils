export type Assert<T extends true> = T;
export type Equal<X, Y> = [X, Y] extends [Y, X] ? true : false;
export type NotEqual<X, Y> = true extends Equal<X, Y> ? never : true;
