import {Car} from './car';

export interface BodyType {
  id: number;
  type: string;
  cars?: Car[];
}
