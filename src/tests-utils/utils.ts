declare const MistakeSymbol: unique symbol;

type Mistake<Message extends string, Info = never> = Message & {
  [MistakeSymbol]: Info;
};

export type Equal<Left, Right> = (<X>() => X extends Left ? 1 : 2) extends <
  X,
>() => X extends Right ? 1 : 2
  ? unknown
  : never;

export type Assert<
  Actual,
  Expected extends
    | Equal<Actual, Expected>
    | Mistake<
        'Assert fail',
        {
          actual: Actual;
          expected: Expected;
        }
      >,
> = Actual;

export type AssertNever<Actual extends never> = Actual;
