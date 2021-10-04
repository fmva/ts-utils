import { Assert, Equal } from '../tests/utils';
import { TypeOfPropertyPath } from './filters';

/*
 * TypeOfPropertyPath
 */
type Owner = {
  name: string;
  dateBuying: number;
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
  Assert<Equal<TypeOfPropertyPath<Menu, 'title'>, string>>,
  Assert<Equal<TypeOfPropertyPath<Menu, 'restaurant.street'>, string>>,
  Assert<Equal<TypeOfPropertyPath<Menu, 'restaurant.office'>, number>>,
  Assert<Equal<TypeOfPropertyPath<Menu, 'restaurant.restaurantOwner'>, never>>,
  Assert<Equal<TypeOfPropertyPath<Menu, 'restaurant.owner'>, Owner>>,
];
