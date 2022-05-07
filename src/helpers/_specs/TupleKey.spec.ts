import { Assert, AssertNever } from '../../tests-utils/utils';
import { TupleKey } from '../helpers';

export type TupleKeyCases = [
  Assert<TupleKey<['a', 'b']>, '0' | '1'>,
  Assert<TupleKey<['a', 'b', 'c']>, '0' | '1' | '2'>,
  AssertNever<TupleKey<[]>>,
];
