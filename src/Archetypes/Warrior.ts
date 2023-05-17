import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Warrior extends Archetypes {
  private static _createdInstances = 0;
  private _energyType: EnergyType;
  
  constructor(name:string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._createdInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior._createdInstances;
  }
}