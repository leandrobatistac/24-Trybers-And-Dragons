import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player1: Fighter;
  private _monsters: (Fighter[] | SimpleFighter[]);

  constructor(
    player1: Fighter, 
    monsters: (Fighter[] | SimpleFighter[]), 
  ) {
    super(player1);
    this._player1 = player1;
    this._monsters = monsters;
  }

  fight(): number {
    while (this._player1.lifePoints > 0 && this._monsters
      .every((e) => e.lifePoints > 0)) {
      this._monsters.forEach((monster) => {
        this._player1.attack(monster);
        monster.attack(this._player1);
      });
    }
    return super.fight();
  }
}