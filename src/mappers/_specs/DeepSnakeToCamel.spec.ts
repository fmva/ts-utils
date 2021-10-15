import { Assert, Equal } from '../../tests-utils/utils';
import { DeepSnakeToCamel } from '../mappers';

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
