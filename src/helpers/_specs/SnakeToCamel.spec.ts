import { Assert } from '../../tests-utils/utils';
import { SnakeToCamel } from '../helpers';

export type SnakeToCamelCases = [
  Assert<SnakeToCamel<'start_end'>, 'startEnd'>,
  Assert<SnakeToCamel<'start_middle_end'>, 'startMiddleEnd'>,
  Assert<SnakeToCamel<'start'>, 'start'>,
];
