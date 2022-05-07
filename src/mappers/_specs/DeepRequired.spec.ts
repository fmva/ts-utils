import { Assert } from '../../tests-utils/utils';
import { DeepRequired } from '../mappers';

type Foo = {
  a?: string;
  b?: boolean;
  c: number;
  nested: {
    a?: string;
    b?: boolean;
    c: number;
    nested?: {
      a?: string;
      b?: boolean;
      c?: number;
    };
  };
};

type DeepRequiredFoo = {
  a: string;
  b: boolean;
  c: number;
  nested: {
    a: string;
    b: boolean;
    c: number;
    nested: {
      a: string;
      b: boolean;
      c: number;
    };
  };
};

type Boo = {
  a?: string;
  b?: string;
  c?: number;
};

type DeepRequiredBoo = {
  a: string;
  b: string;
  c: number;
};

type Coo = {
  a?: string;
  b?: string;
  c?: number;
  nestedFoo?: Foo[];
};

type DeepRequiredCoo = {
  a: string;
  b: string;
  c: number;
  nestedFoo: DeepRequiredFoo[];
};

export type DeepRequiredCases = [
  Assert<DeepRequired<Foo>, DeepRequiredFoo>,
  Assert<DeepRequired<Boo>, DeepRequiredBoo>,
  Assert<DeepRequired<{ a?: string }>, { a: string }>,
  Assert<DeepRequired<Coo>, DeepRequiredCoo>,
  Assert<DeepRequired<undefined>, undefined>,
  Assert<DeepRequired<string>, string>,
  Assert<DeepRequired<null>, null>,
  Assert<DeepRequired<DeepRequiredFoo>, DeepRequiredFoo>,
  Assert<DeepRequired<{ a: string }>, { a: string }>,
];
