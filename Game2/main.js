$(document).ready(function() {
//sanity check
	alert('sanity check');
//store megaman and mario in image object
var megaMan = new Image(25,25);
megaMan.src ="http://www.adiumxtras.com/images/pictures/8bit_mega_man_1_20276_6496_image_9810.png";
megaMan.id = "megaman";
var mario = new Image(25,25);
mario.src ="http://t3.rbxcdn.com/f1bb58b5032175e1dd552fdb60a102cb";
mario.id = "mario";

//start position for megaman and mario
var posMegaMan = 0;
var posMario = 0;
$('.0').append(megaMan);
$('.0').append(mario);

// die roll	

$('.btn').on('click', function rollDice(event) {
	var die1 = document.getElementById('die1');
	var die2 = document.getElementById('die2');
	var status = document.getElementById('status');
	var d1 = Math.floor(Math.random() * 6) + 1; 
	var d2 = Math.floor(Math.random() * 6) + 1; 
	var diceTotal= d1 + d2; 
	die1.innerHTML = d1;
	die2.innerHTML = d2; 
	status.innerHTML = "You rolled " + diceTotal + "."; 
	


});

// moving players


}); 