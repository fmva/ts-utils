<div align="center">
# ts-utils

This project was designed for TypeScript studying and collects types which could be useful for building apps.
</div>

# Table of Contents

## Helpers

* [`AnyObject`](#any-object)
* [`KeyValuePairs`](#key-values-pairs)
* [`SnakeToCamel`](#snake-to-camel)
* [`ValueOf`](#value-of)

## Filters

* [`PropertyPathTypeOf`](#property-path-type-of)

## Mappers

## Helpers

### `AnyObject`
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
 }

const numberDictionary: KeyValuePairs<number> = {
  a: 1,
  b: 2,
  c: 3,
}
 
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
const restaurantOwner: PropertyPathTypeOf<Menu, 'restaurant.restaurantOwner'> = 'Smith'; // error, never type
const owner: PropertyPathTypeOf<Menu, 'restaurant.owner'> = {
    name: 'Smith',
    buyingDate: 1999,
};

```
