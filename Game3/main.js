$(document).ready(function(){

var link = new Image(25,25);
	link.src = "http://2.bp.blogspot.com/_NvrrpaQZaO4/TUBkoyF1jBI/AAAAAAAAAA0/tKrBUc2xcA8/s1600/Giant_16_bit_Link_sprite_2_by_dragonpjb.gif";
	link.id = "link";

var zelda = new Image(25,25);
	zelda.src = "http://www.zeldadungeon.net/wiki/images/8/82/Princess-Zelda-Sprite.png";
	zelda.id = "zelda";

var heart = new Image(20,20);
	heart.src = "http://www.zeldadungeon.net/wiki/images/1/10/HeartContainer.png";
	heart.id = "heart";

//I know this looks terrible.. but I could not get it to work any other way with the time I had.. :(
var scoreHeart1 = new Image(10,10);
	scoreHeart1.src = "http://www.zeldadungeon.net/wiki/images/1/10/HeartContainer.png";
var scoreHeart2 = new Image(10,10);
	scoreHeart2.src = "http://www.zeldadungeon.net/wiki/images/1/10/HeartContainer.png";
var scoreHeart3 = new Image(10,10);
	scoreHeart3.src = "http://www.zeldadungeon.net/wiki/images/1/10/HeartContainer.png";
var scoreHeart4 = new Image(10,10);
	scoreHeart4.src = "http://www.zeldadungeon.net/wiki/images/1/10/HeartContainer.png";
var scoreHeart5 = new Image(10,10);
	scoreHeart5.src = "http://www.zeldadungeon.net/wiki/images/1/10/HeartContainer.png";
var scoreHeart6 = new Image(10,10);
	scoreHeart6.src = "http://www.zeldadungeon.net/wiki/images/1/10/HeartContainer.png";
var scoreHeart7 = new Image(10,10);
	scoreHeart7.src = "http://www.zeldadungeon.net/wiki/images/1/10/HeartContainer.png";
var scoreHeart8 = new Image(10,10);
	scoreHeart8.src = "http://www.zeldadungeon.net/wiki/images/1/10/HeartContainer.png";
var scoreHeart9 = new Image(10,10);
	scoreHeart9.src = "http://www.zeldadungeon.net/wiki/images/1/10/HeartContainer.png";
var scoreHeart10 = new Image(10,10);
	scoreHeart10.src = "http://www.zeldadungeon.net/wiki/images/1/10/HeartContainer.png";

$('.l1').append(scoreHeart1);
$('.l2').append(scoreHeart2);
$('.l3').append(scoreHeart3);
$('.l4').append(scoreHeart4);
$('.l5').append(scoreHeart5);
$('.z6').append(scoreHeart6);
$('.z7').append(scoreHeart7);
$('.z8').append(scoreHeart8);
$('.z9').append(scoreHeart9);
$('.z10').append(scoreHeart10);

var heartL = 0;
var heartZ = 5; 
var xCord = 0;
var yCord = 0;
var xCordZ = 0;
var yCordZ = 0;
//start for link 
var linkStart = function() {
	xCord = -12;
	yCord = 11;
	$(('.x' + xCord) + ('.y' + yCord)).append(link);
};
linkStart();
//and zelda
var zeldaStart= function() {
	xCordZ = 11;
	yCordZ = -12;
	$( ('.x' + xCordZ) + ('.y'+ yCordZ )).append(zelda);
};
zeldaStart();
//heart cords
var xCordH = 0; 
var yCordH = 0;
var negX = 0;
var negY = 0;
// reset function
var reset = function() {
	linkStart();
	zeldaStart();
	putHeart();
	$('.score').hide();
	heartL = 0;
	heartZ = 5;
};

var checkForHeart = function() {
	if (xCord === xCordH && yCord === yCordH) {
		if(heartL === 4) {
			heartL++;
			$('.l' + heartL).show();
			$('#heart').remove();
			alert('Link wins!');
			reset();
		} else {
			$('#heart').remove();
			heartL++;
			putHeart();
			$('.l' + heartL).show();
		}
	} else if (xCordZ=== xCordH && yCordZ===yCordH) {
		if(heartZ === 9) {
			heartZ++;
			$('.z'+ heartZ).show();
			$('#heart').remove();
			alert('Zelda wins!');
			reset();
		} else {
			$('#heart').remove();
			heartZ++;
			putHeart();
			$('.z'+ heartZ).show();
		}
	}
};

//function to place heart
var putHeart = function() {
	var numX = Math.random();
	var numY = Math.random();
	if (numX < 0.50) {
		negX = -1;
	} else if (numX > 0.51) {
		negX = 1;
	}
	 if (numY < 0.50) {
		negY = -1;
	} else if (numY > 0.51) {
		negY = 1;
	}
	xCordH = ( (Math.floor(Math.random() * 6 ) ) + ( (Math.floor(Math.random() *6) ) ) ) * (negX);
	yCordH = ( (Math.floor(Math.random() * 6 ) ) + ( (Math.floor(Math.random() *6) ) ) ) * (negY);
	$( ('.x' + xCordH) + ('.y'+ yCordH) ).append(heart);
};

$(window).ready(function(){
	putHeart();
	});
var posHeart = putHeart();



//movement for link
var moveLeft = function() {
	if (xCord > -12){
		xCord -= 1;
		$(('.x' + xCord) + ('.y' + yCord)).append(link); 
	} else if (xCord === -12) {
		xCord = xCord + 0; 
	} else {
		return; 
	}
};
var moveRight = function() {
	if(xCord < 11){
		xCord += 1;
		$(('.x' + xCord) + ('.y' + yCord)).append(link); 
	} else if (xCord === 11) {
		xCord = xCord + 0; 
	} else {
		return; 
	}
};
var moveUp = function() {
	if (yCord < 11){
		yCord += 1;
		$(('.x' + xCord) + ('.y' + yCord)).append(link); 
	} else if (yCord === 11) {
		yCord = yCord + 0;
	} else {
		return;
	}
};
var moveDown = function() {
	if (yCord > -12) {
		yCord -= 1;
		$(('.x' + xCord) + ('.y' + yCord)).append(link); 
	} else if (yCord === -12) {
		yCord = yCord + 0;
	} else {
		return; 
	}
};

//movement for zelda
var moveLeftZ = function () {
	if (xCordZ > -12) {
		xCordZ -= 1;
		$(('.x' + xCordZ) + ('.y'+ yCordZ )).append(zelda);
	} else if (xCordZ === -12) {
		xCordZ = xCordZ + 0;
	} else {
		return; 
	}
};
var moveRightZ = function() {
	if (xCordZ < 11 ) {
		xCordZ += 1;
		$(('.x' + xCordZ) + ('.y'+ yCordZ )).append(zelda);
	} else if (xCordZ === 11) {
		xCordZ = xCordZ + 0;
	} else {
		return; 
	}
};
var moveUpZ = function() {
	if(yCordZ < 11) {
		yCordZ += 1;
		$(('.x' + xCordZ) + ('.y'+ yCordZ )).append(zelda);
	} else if (yCordZ === 11) {
		yCordZ = yCordZ + 0; 
	} else {
		return;
	}
};
var moveDownZ = function() {
	if (yCordZ > -12) {
		yCordZ -= 1;
		$(('.x' + xCordZ) + ('.y'+ yCordZ )).append(zelda);
	} else if(yCordZ === -12) {
		yCordZ = yCordZ + 0;
	} else {
		return; 
	}
};
//keypress movement for link
$(window).on('keypress', function handlerL (event) {
		if(event.which === 97) { //a
			moveLeft();//left for link
			checkForHeart();
		} else if(event.which === 100) { //d
			moveRight();//right for link
			checkForHeart();
		} else if(event.which === 119) { //w
			moveUp();//up for link
			checkForHeart();
		} else if(event.which === 115) { //s
			moveDown();//down for link
			checkForHeart();
		}
	});
//keypress movement for zelda
$(window).on('keypress', function handlerZ (event) {
		if (event.which === 106) { //j
			moveLeftZ(); //left for zelda
			checkForHeart();
		} else if (event.which === 108) { //l
			moveRightZ(); //right for zelda
			checkForHeart();
		} else if (event.which === 105) { //i
			moveUpZ(); //up for zelda
			checkForHeart();
		} else if(event.which === 107) { //k
			moveDownZ(); //down for zelda
			checkForHeart();

	}
	});



});