import { Assert, Equal } from '../../tests-utils/utils';
import { SnakeToCamel } from '../helpers';

export type SnakeToCamelCases = [
  Assert<Equal<SnakeToCamel<'start_end'>, 'startEnd'>>,
  Assert<Equal<SnakeToCamel<'start_middle_end'>, 'startMiddleEnd'>>,
  Assert<Equal<SnakeToCamel<'start'>, 'start'>>,
];
