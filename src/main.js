import $ from 'jquery';
import { Player } from './backEnd.js';
import { Enemy } from './backEnd.js';
import './input.scss'

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
  $("input[type='radio']").click(function(){
    let playerClass = $("input[name='class']:checked").val();
    player1.setClass(playerClass);
    player1.items.push('KNIFE');
    console.log(player1);
  })
});
