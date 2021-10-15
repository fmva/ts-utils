import { Assert, Equal } from '../../tests-utils/utils';
import { DeepPartial } from '../mappers';

type Foo = {
  a?: string;
  b?: boolean;
  c: number;
  nested?: {
    a: string;
    b: boolean;
    c: number;
    nested: {
      a?: string;
      b?: boolean;
      c?: number;
    };
  };
};

type DeepPartialFoo = {
  a?: string;
  b?: boolean;
  c?: number;
  nested?: {
    a?: string;
    b?: boolean;
    c?: number;
    nested?: {
      a?: string;
      b?: boolean;
      c?: number;
    };
  };
};

type Boo = {
  a: string;
  b: string;
  c: number;
};

type DeepPartialBoo = {
  a?: string;
  b?: string;
  c?: number;
};

type Coo = {
  a: string;
  b: string;
  c: number;
  nestedFoo: Foo[];
};

type DeepPartialCoo = {
  a?: string;
  b?: string;
  c?: number;
  nestedFoo?: DeepPartialFoo[];
};

export type DeepRequiredCases = [
  Assert<Equal<DeepPartial<Foo>, DeepPartialFoo>>,
  Assert<Equal<DeepPartial<Foo>, DeepPartialFoo>>,
  Assert<Equal<DeepPartial<Boo>, DeepPartialBoo>>,
  Assert<Equal<DeepPartial<{ a: string }>, { a?: string }>>,
  Assert<Equal<DeepPartial<Coo>, DeepPartialCoo>>,
  Assert<Equal<DeepPartial<undefined>, undefined>>,
  Assert<Equal<DeepPartial<string>, string>>,
  Assert<Equal<DeepPartial<null>, null>>,
  Assert<Equal<DeepPartial<DeepPartialFoo>, DeepPartialFoo>>,
  Assert<Equal<DeepPartial<{ a?: string }>, { a?: string }>>,
];
