import { Assert, Equal } from '../../tests-utils/utils';
import { IsTuple } from '../helpers';

type Foo = {
  a: string;
  b: number;
  c: boolean;
};

type Tuple = ['a', 'b'];

export type IsTupleCases = [
  Assert<Equal<IsTuple<Tuple>, true>>,
  Assert<Equal<IsTuple<Foo[]>, false>>,
  Assert<Equal<IsTuple<string[]>, false>>,
];
