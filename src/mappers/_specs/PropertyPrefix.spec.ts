import { Assert, Equal } from '../../tests/utils';
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
  Assert<
    Equal<PropertyPrefix<{ foo: string }, 'prefix'>, { prefixFoo: string }>
  >,
  Assert<Equal<PropertyPrefix<Products, 'packed'>, PackedProducts>>,
];
