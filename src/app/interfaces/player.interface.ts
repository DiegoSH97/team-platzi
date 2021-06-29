import { Countries } from '../enums/countries.enum';

export interface Player {
  $key?: string;
  name: string;
  lastName: string;
  position: string;
  weight: number;
  height: number;
  nationality: Countries;
  leftFooted: boolean;
}
