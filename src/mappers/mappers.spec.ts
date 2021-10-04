import { Assert, Equal } from '../tests/utils';
import { DeepSnakeToCamel, PropertyPrefix, PropertyPostfix } from './mappers';

/**
 * DeepSnakeToCamel
 */
type SnakeType = {
  start_end: string;
  start_middle_end: number;
  start: boolean;
};

type CamelType = {
  startEnd: string;
  startMiddleEnd: number;
  start: boolean;
};

type DeepSnakeType = {
  start_end: string;
  start_middle_end: number;
  start: boolean;
  nested: SnakeType;
};

type DeepCamelType = {
  startEnd: string;
  startMiddleEnd: number;
  start: boolean;
  nested: CamelType;
};

export type DeepObjectSnakeToCamelCases = [
  Assert<Equal<DeepSnakeToCamel<SnakeType>, CamelType>>,
  Assert<Equal<DeepSnakeToCamel<DeepSnakeType>, DeepCamelType>>,
  Assert<Equal<DeepSnakeToCamel<undefined>, undefined>>,
  Assert<Equal<DeepSnakeToCamel<number>, number>>,
  Assert<Equal<DeepSnakeToCamel<string>, string>>,
  Assert<Equal<DeepSnakeToCamel<boolean>, boolean>>,
  Assert<Equal<DeepSnakeToCamel<{ field: string }>, { field: string }>>,
  Assert<
    Equal<
      DeepSnakeToCamel<{ nested_array: SnakeType[] }>,
      { nestedArray: CamelType[] }
    >
  >,
];

/**
 * PropertyPrefix
 */

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

/*
  PropertyPostfix
 */

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
