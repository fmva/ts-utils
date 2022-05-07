import { Assert } from '../../tests-utils/utils';
import { PropertyPrefix } from '../mappers';

type Products = {
  fish: string;
  meat: string;
  bread: string;
};

type PackedProducts = {
  packedFish: string;
  packedMeat: string;
  packedBread: string;
};

export type PropertyPrefixCases = [
  Assert<PropertyPrefix<{ foo: string }, 'prefix'>, { prefixFoo: string }>,
  Assert<PropertyPrefix<Products, 'packed'>, PackedProducts>,
];
