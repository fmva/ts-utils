import { Assert, EqualUnions, NotEqualUnions } from '../../tests-utils/utils';
import { TupleKey } from '../helpers';

type Tuple = ['a', 'b'];

export type TupleKeyCases = [
  Assert<EqualUnions<TupleKey<Tuple>, '1'>>,
  Assert<EqualUnions<TupleKey<Tuple>, '0'>>,
  Assert<NotEqualUnions<TupleKey<Tuple>, '3'>>,
];
