import { Countries } from '../enums/countries.enum';
import { Player } from './player.interface';

export interface Team {
  $key?: string;
  name: string;
  country: Countries;
  players: Player[];
}
