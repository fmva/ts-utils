import { Assert } from '../../tests-utils/utils';
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
  Assert<DeepPartial<Foo>, DeepPartialFoo>,
  Assert<DeepPartial<Foo>, DeepPartialFoo>,
  Assert<DeepPartial<Boo>, DeepPartialBoo>,
  Assert<DeepPartial<{ a: string }>, { a?: string }>,
  Assert<DeepPartial<Coo>, DeepPartialCoo>,
  Assert<DeepPartial<undefined>, undefined>,
  Assert<DeepPartial<string>, string>,
  Assert<DeepPartial<null>, null>,
  Assert<DeepPartial<DeepPartialFoo>, DeepPartialFoo>,
  Assert<DeepPartial<{ a?: string }>, { a?: string }>,
];
