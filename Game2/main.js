$(document).ready(function() {
//sanity check
alert('ready');
	$(window).load(function() {
		if (Math.random() > 0.50) {		
			var turn = 0;
			alert('Megaman starts!');
		} else {
			var turn = 1;
			alert('Mario starts!');
		}
		
//store megaman and mario in image object
var megaMan = new Image(25,25);
megaMan.src ="http://www.adiumxtras.com/images/pictures/8bit_mega_man_1_20276_6496_image_9810.png";
megaMan.id = "megaman";
var mario = new Image(25,25);
mario.src ="http://t3.rbxcdn.com/f1bb58b5032175e1dd552fdb60a102cb";
mario.id = "mario";

//start position for megaman and mario

if (turn === 0){
	$('.btn1').show();
} else  {
	$('.btn2').show();
}

var posMegaMan = 0;
var posMario = 0;
$('.0').append(megaMan);
$('.0').append(mario);
var megaManLap = 0;
var marioLap = 0; 
$('.megaManLap').text('lap '+ megaManLap + '/3');
$('.marioLap').text('lap '+ marioLap + '/3');


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
	$('.btn2').show();
	$('.btn1').hide();
	turn+=1;
		if (turn === 0){
		$('.btn1').show();
	} else if (turn === 1) {
		$('.btn2').show();
	} else {
		return;
	}


	
		if(event) {
			$('#megaman').remove();
			posMegaMan = diceTotal + posMegaMan;
				if (posMegaMan > 35) {
					var over = (posMegaMan - 35) -1;
					megaManLap +=1;
						if(megaManLap > 3) {
							alert('Megaman wins!!!');
							$('.0').append(megaMan);
							return;
						} else {
							console.log(megaManLap);
						}
					posMegaMan = 0;
					$('.' + over).append(megaMan);
				} else {
					$('.'+posMegaMan).append(megaMan);
				}
		}
$('.megaManLap').text('lap '+ megaManLap + '/3');


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
	$('btn1').show();
	$('.btn2').hide();
	turn-=1;
	if (turn === 0){
		$('.btn1').show();
	} else if (turn === 1) {
		$('.btn2').show();
	} else {
		return;
	}

	

		if(event) {
			$('#mario').remove();
			posMario = diceTotal + posMario;
				if (posMario > 35) {
					var over = (posMario - 35) -1;
					marioLap +=1;
						if(marioLap > 3) {
							alert('Mario wins!');
							$('.0').append(mario);
							return; 
						} else{
							console.log(marioLap);
						}
					posMario = 0;
					$('.' + over).append(mario);
				} else {
					$('.'+ posMario).append(mario);
				}
		}
$('.marioLap').text('lap '+ marioLap + '/3');

});

 });


}); 