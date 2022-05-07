import { Assert } from '../../tests-utils/utils';
import { IsTuple } from '../helpers';

type Foo = {
  a: string;
  b: number;
  c: boolean;
};

type Tuple = ['a', 'b'];

export type IsTupleCases = [
  Assert<IsTuple<Tuple>, true>,
  Assert<IsTuple<Foo[]>, false>,
  Assert<IsTuple<string[]>, false>,
];
