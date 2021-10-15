import { Assert, Equal } from '../../tests-utils/utils';
import { PropertyPostfix } from '../mappers';

type Cars = {
  sedan: boolean;
  hatchback: boolean;
};

type CarsSold = {
  sedanSold: boolean;
  hatchbackSold: boolean;
};

export type PropertyPostfixCases = [
  Assert<
    Equal<PropertyPostfix<{ foo: string }, 'Postfix'>, { fooPostfix: string }>
  >,
  Assert<Equal<PropertyPostfix<Cars, 'Sold'>, CarsSold>>,
];
