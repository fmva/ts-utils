import { Assert, Equal } from '../../tests/utils';
import { ValueOf } from '../helpers';

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
