<div style="text-align: center">
# ts-utils

This project was designed for TypeScript studying and collects types which could be useful for building apps.

</div>

# ToDo

- PartialProperty
- DeepOptional


# Table of Contents

## Helpers

- [`AnyObject<TValues>`](#anyobjecttvalues)
- [`KeyValuePairs`](#keyvaluepairs)
- [`SnakeToCamel`](#snaketocamel)
- [`ValueOf`](#valueof)

## Filters

- [`PropertyPathTypeOf`](#propertypathtypeof)

## Mappers

- [`DeepSnakeToCamel`](#deepsnaketocamel)
- [`PropertyPostfix`](#propertypostfix)
- [`PropertyPrefix`](#propertypostfix)
- [`DeepRequired`](#deeprequired)

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

### `KeyValuePairs`

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

### `SnakeToCamel`

Convert string from snake to camel

```ts
const a: SnakeToCamel<'start_end'> = 'startEnd';
const b: SnakeToCamel<'start_middle_end'> = 'startMiddleEnd';
const c: SnakeToCamel<'start'> = 'start';
```

### `ValueOf`

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

## Filters

### `PropertyPathTypeOf`

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

### `DeepSnakeToCamel`

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

## PropertyPostfix

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

## PropertyPrefix

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

### DeepRequired
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

// all properties should be required
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
