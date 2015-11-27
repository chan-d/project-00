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

// die roll	for megaman

$('.btn1').on('click', function rollDice(event) {
	var die1 = document.getElementById('die1');
	var die2 = document.getElementById('die2');
	var status1 = document.getElementById('status1');
	var d1 = Math.floor(Math.random() * 6) + 1; 
	var d2 = Math.floor(Math.random() * 6) + 1; 
	var diceTotal= d1 + d2; 
	die1.innerHTML = d1;
	die2.innerHTML = d2; 
	status1.innerHTML = "You rolled " + diceTotal + "."; 
	

		if(event) {
			$('#megaman').remove();
			posMegaMan = diceTotal + posMegaMan;
			$('.'+posMegaMan).append(megaMan);
		}
	
});
//die roll for mario
$('.btn2').on('click', function rollDice(event) {
	var die3 = document.getElementById('die3');
	var die4 = document.getElementById('die4');
	var status = document.getElementById('status2');
	var d3 = Math.floor(Math.random() * 6) + 1; 
	var d4 = Math.floor(Math.random() * 6) + 1; 
	var diceTotal= d3 + d4; 
	die3.innerHTML = d3;
	die4.innerHTML = d4; 
	status2.innerHTML = "You rolled " + diceTotal + "."; 
	

		if(event) {
			$('#marip').remove();
			posMario = diceTotal + posMario;
			$('.'+posMario).append(mario);
		}
	
});



// moving players


}); 