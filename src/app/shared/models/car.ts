import {BodyType} from './bodytype';

export interface Car {
  id: number;
  name: string;
  brand: string;
  body: BodyType;
  price: number;
  color: string;
  modelYear: string;
}
