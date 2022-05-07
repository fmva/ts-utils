import { Assert } from '../../tests-utils/utils';
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
  Assert<DeepSnakeToCamel<SnakeType>, CamelType>,
  Assert<DeepSnakeToCamel<DeepSnakeType>, DeepCamelType>,
  Assert<DeepSnakeToCamel<undefined>, undefined>,
  Assert<DeepSnakeToCamel<number>, number>,
  Assert<DeepSnakeToCamel<string>, string>,
  Assert<DeepSnakeToCamel<boolean>, boolean>,
  Assert<DeepSnakeToCamel<{ field: string }>, { field: string }>,
  Assert<
    DeepSnakeToCamel<{ nested_array: SnakeType[] }>,
    { nestedArray: CamelType[] }
  >,
];
