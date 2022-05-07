import { Assert } from '../../tests-utils/utils';
import { ObjectPath } from '../helpers';

type Boo = {
  a: string;
  b: number;
};

type Foo = {
  a?: string;
  b?: boolean;
  c: number;
  boo: Boo[];
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

export type ObjectPathCases = [
  Assert<
    ObjectPath<Foo>,
    | 'a'
    | 'b'
    | 'c'
    | 'boo'
    | 'nested'
    | `boo.${number}`
    | `boo.${number}.a`
    | `boo.${number}.b`
    | 'nested.a'
    | 'nested.b'
    | 'nested.c'
    | 'nested.nested'
    | 'nested.nested.a'
    | 'nested.nested.b'
    | 'nested.nested.c'
  >,
];
