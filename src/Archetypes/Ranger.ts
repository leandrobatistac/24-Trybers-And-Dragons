import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Ranger extends Archetypes {
  private static _createdInstances = 0;
  private _energyType: EnergyType;
  
  constructor(name:string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._createdInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger._createdInstances;
  }
}