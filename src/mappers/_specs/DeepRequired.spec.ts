import { Assert, Equal } from '../../tests-utils/utils';
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
  Assert<Equal<DeepRequired<Foo>, DeepRequiredFoo>>,
  Assert<Equal<DeepRequired<Boo>, DeepRequiredBoo>>,
  Assert<Equal<DeepRequired<{ a?: string }>, { a: string }>>,
  Assert<Equal<DeepRequired<Coo>, DeepRequiredCoo>>,
  Assert<Equal<DeepRequired<undefined>, undefined>>,
  Assert<Equal<DeepRequired<string>, string>>,
  Assert<Equal<DeepRequired<null>, null>>,
  Assert<Equal<DeepRequired<DeepRequiredFoo>, DeepRequiredFoo>>,
  Assert<Equal<DeepRequired<{ a: string }>, { a: string }>>,
];
