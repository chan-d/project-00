$(document).ready(function(){
alert('ready');

var link = new Image(10,10);
	link.src = "http://2.bp.blogspot.com/_NvrrpaQZaO4/TUBkoyF1jBI/AAAAAAAAAA0/tKrBUc2xcA8/s1600/Giant_16_bit_Link_sprite_2_by_dragonpjb.gif";
	link.id = "link";

var zelda = new Image(10,10);
	zelda.src = "http://www.zeldadungeon.net/wiki/images/8/82/Princess-Zelda-Sprite.png";
	zelda.id = "zelda";

//start for link 
var xCord = -1;
var yCord = 1;
$( ('.x' + xCord) + ('.y' + yCord) ).append(link);
//and zelda
var xCordZ = 0;
var yCordZ = 0;
$( ('.x' + xCordZ) + ('.y'+ yCordZ ) ).append(zelda);

//movement for link
var moveLeft = function() {
	if (xCord > -12){
		xCord -= 1;
	} else if (xCord === -12) {
		xCord = xCord + 0; 
	} else {
		return; 
	}
};
var moveRight = function() {
	if(xCord < 11){
		xCord += 1;
	} else if (xCord === 11) {
		xCord = xCord + 0; 
	} else {
		return; 
	}
};
var moveUp = function() {
	if (yCord < 11){
		yCord += 1;
	} else if (yCord === 11) {
		yCord = yCord + 0;
	} else {
		return;
	}
};
var moveDown = function() {
	if (yCord > -12) {
		yCord -= 1;
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
	} else if (xCordZ === -12) {
		xCordZ = xCordZ + 0;
	} else {
		return; 
	}
};
var moveRightZ = function() {
	if (xCordZ < 11 ) {
		xCordZ += 1;
	} else if (xCordZ === 11) {
		xCordZ = xCordZ + 0;
	} else {
		return; 
	}
};
var moveUpZ = function() {
	if(yCordZ < 11) {
		yCordZ += 1;
	} else if (yCordZ === 11) {
		yCordZ = yCordZ + 0; 
	} else {
		return;
	}
};
var moveDownZ = function() {
	if (yCordZ > -12) {
		yCordZ -= 1;
	} else if(yCordZ === -12) {
		yCordZ = yCordZ + 0;
	} else {
		return; 
	}
};

$(window).on('keypress', function handlerL (event) {
		if(event.which === 97) { //a
			moveLeft();//left for link
			$( ('.y' + yCord) + ('.x'+ xCord) ).append(link); 
		} else if(event.which === 100) { //d
			moveRight();//right for link
			$( ('.y' + yCord) + ('.x'+ xCord) ).append(link); 
		} else if(event.which === 119) { //w
			moveUp();//up for link
			$( ('.y' + yCord) + ('.x'+ xCord) ).append(link); 
		} else if(event.which === 115) { //s
			moveDown();//down for link
			$( ('.y' + yCord) + ('.x'+ xCord) ).append(link); 
		}
	});

$(window).on('keypress', function handlerZ (event) {
		if (event.which === 74) { //j
			moveLeftZ(); //left for zelda
			$( ('.y' + yCordZ ) + ('.x' + xCordZ) ).append(zelda);
		} else if (event.which === 76) { //l
			moveRightZ(); //right for zelda
			$( ('.y' + yCordZ ) + ('.x' + xCordZ) ).append(zelda);
		} else if (event.which === 73) { //i
			moveUpZ(); //up for zelda
			$( ('.y' + yCordZ ) + ('.x' + xCordZ) ).append(zelda);
		} else if(event.which === 75) { //k
			moveDownZ(); //down for zelda
			$( ('.y' + yCordZ ) + ('.x' + xCordZ) ).append(zelda);
	}
	});



});