import $ from 'jquery';
import { Player } from './backEnd.js';
import { Enemy } from './backEnd.js';
import './input.scss';

let enemies = [];
enemies.push(new Enemy('Skeleton', 10, 2));
enemies.push(new Enemy('Rat', 6, 1));
enemies.push(new Enemy('Goblin', 12, 3));
console.log(enemies);

$(document).ready(function() {
  $(".classSelect").hide();
  $(".characterSet").hide();
  let player1 = new Player(null, null, 10, 2, null);
  player1.hp = 10;
  $(".startBtn").click(function() {
    $(".gameStart").hide();
    $(".menuBG").hide();
    $(".name").show();
    $(".characterSet").show();
  });
  $(".nameSubmit").click(function() {
    let name = $("#playerName").val();
    player1.setName(name);
    console.log(player1);
    $(".name").hide();
    $('#name').text(name + '!');
    $(".classSelect").show();
  });
  $(".form").submit(function(event){
    event.preventDefault();
    let playerClass = $("input[name='class']:checked").val();
    player1.setClass(playerClass);
    console.log(player1);
  })
});
