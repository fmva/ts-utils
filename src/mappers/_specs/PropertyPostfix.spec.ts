import { Assert } from '../../tests-utils/utils';
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
  Assert<PropertyPostfix<{ foo: string }, 'Postfix'>, { fooPostfix: string }>,
  Assert<PropertyPostfix<Cars, 'Sold'>, CarsSold>,
];
