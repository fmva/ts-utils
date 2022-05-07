import { Assert } from '../../tests-utils/utils';
import { PropertyPathTypeOf } from '../filters';

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
  Assert<PropertyPathTypeOf<Menu, 'title'>, string>,
  Assert<PropertyPathTypeOf<Menu, 'restaurant.street'>, string>,
  Assert<PropertyPathTypeOf<Menu, 'restaurant.office'>, number>,
  Assert<PropertyPathTypeOf<Menu, 'restaurant.restaurantOwner'>, never>,
  Assert<PropertyPathTypeOf<Menu, 'restaurant.owner'>, Owner>,
];
