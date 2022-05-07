import { Assert } from '../../tests-utils/utils';
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
  Assert<ValueOf<Foo>, string | number | boolean>,
  Assert<ValueOf<Boo>, string | boolean>,
  Assert<ValueOf<Doo>, string>,
];
