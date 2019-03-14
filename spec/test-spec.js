
import { Player } from './../src/backEnd.js';
import { Enemy } from './../src/backEnd.js';
import { encounter} from './../src/backEnd.js';



describe('Player', function() {

  it('should set the players name', function() {

    let player1 = new Player("Player1", "Ranger", 10, 10);
    player1.setName('Bob');
    expect(player1.name).toEqual("Bob");
  });

  it('should set the players class', function() {

    let player1 = new Player("Player1", "Ranger", 10, 10);
    player1.setClass('Warrior');
    expect(player1.chClass).toEqual("Warrior");
  });

  it('should reduce the Enemy HP', function() {

    let player1 = new Player("Player1", "Ranger", 10, 2);
    let rat = new Enemy("Rat", 10, 2);
    rat.enenmyAttack(player1)
    expect(player1.hp).toEqual(8);
  });

  it('should add something to the players inventory', function(){
    let player1 = new Player("Player1", "Ranger", 10, 2);
    player1.playerAddItem('Knife');
    expect(player1.items).toEqual(['Knife']);
  });

  it('should add something to the players inventory when setting a class', function(){
    let player1 = new Player("Player1", "Ranger", 10, 2);
    player1.setClass('Ranger');
    expect(player1.items).toEqual(['Bow & Arrows']);
  });

  it('should select an enemy from an array of enemies', function() {
    let enemies = [];
    enemies.push(new Enemy('Skeleton', 10, 2));
    enemies.push(new Enemy('Rat', 6, 1));
    enemies.push(new Enemy('Goblin', 12, 3));
    let anEnemy = encounter(enemies);
    expect(anEnemy).toBeGreaterThan(-1);
    expect(anEnemy).toBeLessThan(enemies.length);
  });

});


describe('Enemy', function() {

  it('should reduce the players HP', function() {

    let player1 = new Player("Player1", "Ranger", 10, 10);
    let rat = new Enemy("Rat", 10, 2);
    rat.enenmyAttack(player1);
    rat.enenmyAttack(player1);
    expect(player1.hp).toEqual(6);
  });



});
