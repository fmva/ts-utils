import { Assert, Equal } from '../tests/utils';
import { PropertyPathTypeOf } from './filters';

/*
 * TypeOfPropertyPath
 */
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

export type TypeOfPropertyPathCases = [
  Assert<Equal<PropertyPathTypeOf<Menu, 'title'>, string>>,
  Assert<Equal<PropertyPathTypeOf<Menu, 'restaurant.street'>, string>>,
  Assert<Equal<PropertyPathTypeOf<Menu, 'restaurant.office'>, number>>,
  Assert<Equal<PropertyPathTypeOf<Menu, 'restaurant.restaurantOwner'>, never>>,
  Assert<Equal<PropertyPathTypeOf<Menu, 'restaurant.owner'>, Owner>>,
];
