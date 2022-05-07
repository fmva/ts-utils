<div style="text-align: center">
# ts-utils

This project was designed for TypeScript studying and collects types which could be useful for building apps.

</div>

# ToDo

- PartialProperty<T, Path>
- RequiredProperty<T, Path>
- ObjectPath<T>
- ObjectPathValue<T, Path>
- DeepMap
- IsFlatObject

# Table of Contents

## Helpers

- [`AnyObject<TValues>`](#anyobjecttvalues)
- [`KeyValuePairs<TValue>`](#keyvaluepairstvalue)
- [`SnakeToCamel<S>`](#snaketocamels)
- [`ValueOf<T>`](#valueoft)
- [`EmptyObject`](#emptyobject)
- [`IsTuple<TArray>`](#istupletarray)
- [`TupleKey<TArray>`](#tuplekeytarray)
- [`ObjectPath<T>`](#objectpatht)

## Filters

- [`PropertyPathTypeOf<T, Path>`](#propertypathtypeoft-path)

## Mappers

- [`DeepSnakeToCamel<T>`](#deepsnaketocamelt)
- [`PropertyPostfix<TObject, postfix>`](#propertypostfixtobject-postfix)
- [`PropertyPrefix<TObject, prefix>`](#propertyprefixtobject-prefix)
- [`DeepRequired<T>`](#deeprequiredt)
- [`DeepPartial<T>`](#deeppartialt)

## Helpers

### `AnyObject<TValues>`

Type represents an any object

```ts
const foo: AnyObject = {
  a: '1',
  b: 2,
  c: {
    '[': ']',
    '{': '}',
  },
};
```

### `ObjectPath<T>`

Get all property paths from the object

```ts
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

const a: ObjectPath<Foo> = 'a'
const b: ObjectPath<Foo> = 'nested.a'
const c: ObjectPath<Foo> = 'boo.0.b'

````

### `KeyValuePairs<TValue>`

Type represents an obvious object where properties are string

```ts
const stringDictionary: KeyValuePairs = {
  a: 'A',
  b: 'B',
  c: 'C',
};

const numberDictionary: KeyValuePairs<number> = {
  a: 1,
  b: 2,
  c: 3,
};
```

### `SnakeToCamel<S>`

Convert string from snake to camel

```ts
const a: SnakeToCamel<'start_end'> = 'startEnd';
const b: SnakeToCamel<'start_middle_end'> = 'startMiddleEnd';
const c: SnakeToCamel<'start'> = 'start';
```

### `ValueOf<T>`

extract all types from structure

```ts
type Foo = {
  a: string;
  b: number;
  c: boolean;
};

type Boo = {
  a: string;
  b: string;
  c: boolean;
};

type Doo = {
  a: string;
};

const a: ValueOf<Foo> = 1; // string | number | boolean
const b: ValueOf<Boo> = true; // string | boolean
const c: ValueOf<Doo> = '1'; // string
```

### `EmptyObject`

if an object is not empty the TS compiler will back an error;

```ts
// Error. Type 'string' is not assignable to type 'never'
const a: EmptyObject = { key: 'smt' };
```
```ts
// correct
const a: EmptyObject = {}
```

### `IsTuple<TArray>`

Find out the array is a tuple or not;

```ts
type Foo = {
  a: string;
  b: number;
  c: boolean;
};

type Tuple = ['a', 'b'];

const a: IsTuple<Tuple> = true;
const b: IsTuple<Foo[]> = false;
const c: IsTuple<string[]> = false;
```

### `TupleKey<TArray>`

Get the tuple key from a tuple

```ts
type Tuple = ['a', 'b'];

// error
const a: TupleKey<Tuple> = '3';
```
```ts
// correct
const a: TupleKey<Tuple> = '1';
```

## Filters

### `PropertyPathTypeOf<T, Path>`

extract type from a property by string chain format

```ts
type Owner = {
  name: string;
  buyingDate: number;
};

type Menu = {
  title: string;
  cost: number;
  isMeatFree: boolean;
  restaurant: {
    title: string;
    street: string;
    office: number;
    owner: Owner;
  };
};

const title: PropertyPathTypeOf<Menu, 'title'> = 'test'; // string
const street: PropertyPathTypeOf<Menu, 'restaurant.street'> = 'street 178'; // string
const office: PropertyPathTypeOf<Menu, 'restaurant.office'> = 1; // number
const restaurantOwner: PropertyPathTypeOf<Menu, 'restaurant.restaurantOwner'> =
  'Smith'; // error, never type
const owner: PropertyPathTypeOf<Menu, 'restaurant.owner'> = {
  name: 'Smith',
  buyingDate: 1999,
};
```

## Mappers

### `DeepSnakeToCamel<T>`

Deep converting properties of an object from snake to camel format

```ts
type SnakeType = {
  start_end: string;
  start_middle_end: number;
  start: boolean;
};

type DeepSnakeType = {
  start_end: string;
  start_middle_end: number;
  start: boolean;
  nested: SnakeType;
};

const camelCase: DeepSnakeToCamel<SnakeType> = {
  startEnd: 'start',
  startMiddleEnd: 1,
  start: true,
};

const deepCamelCase: DeepSnakeToCamel<DeepSnakeType> = {
  startEnd: 'start',
  startMiddleEnd: 1,
  start: true,
  nested: {
    startEnd: 'start',
    startMiddleEnd: 1,
    start: true,
  },
};
```

### `PropertyPostfix<TObject, postfix>`

add postfix to properties of an original object type

```ts
const a: PropertyPrefix<{ foo: string }, 'prefix'> = { prefixFoo: '1' };

type Products = {
  fish: string;
  meat: string;
  bread: string;
};

const product: PropertyPrefix<Products, 'packed'> = {
  packedFish: 'f',
  packedMeat: 'm',
  packedBread: 'b',
};
```

### `PropertyPrefix<TObject, prefix>`

add prefix to properties of an original object type

```ts
const a: PropertyPostfix<{ foo: string }, 'Postfix'> = { fooPostfix: '1' };

type Cars = {
  sedan: boolean;
  hatchback: boolean;
};

const cars: PropertyPostfix<Cars, 'Sold'> = {
  sedanSold: true,
  hatchbackSold: false,
};
```

### `DeepRequired<T>`
traverse object deeply and set all properties to required

```ts
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

// all properties are required
const a: DeepRequired<Foo> = {
  a: '1',
  b: true,
  c: 1,
  nested: {
    a: '1',
    b: true,
    c: 1,
    nested: {
      a: '1',
      b: true,
      c: 1,
    },
  },
};
```

### `DeepPartial<T>`
traverse object deeply and set all properties to optional

```ts
type Foo = {
  a?: string;
  b?: boolean;
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

// all properties are optional
const a: DeepPartial<Foo> = {
  b: true,
  c: 1,
  nested: {
    a: '1',
    b: true,
  },
};
```
