import { Assert, Equal } from '../tests/utils';
import { SnakeToCamel, ValueOf } from './helpers';

/**
 * SnakeToCamel
 */
export type SnakeToCamelCases = [
  Assert<Equal<SnakeToCamel<'start_end'>, 'startEnd'>>,
  Assert<Equal<SnakeToCamel<'start_middle_end'>, 'startMiddleEnd'>>,
  Assert<Equal<SnakeToCamel<'start'>, 'start'>>,
];

/**
 * ValueOf
 */

type Foo = {
  a: string;
  b: number;
  c: boolean;
};

type Boo = {
  a: string;
  b: string;
  c: boolean;
};

type Doo = {
  a: string;
};

export type ValueOfCases = [
  Assert<Equal<ValueOf<Foo>, string | number | boolean>>,
  Assert<Equal<ValueOf<Boo>, string | boolean>>,
  Assert<Equal<ValueOf<Doo>, string>>,
];
