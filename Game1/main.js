$(document).ready(function() {

	alert('Let\'s play a game!');
	$('.btn').click(function clearBoard(){
	$('.box').empty();
		posOne = 0;
		posTwo = 0;
	$('.start').append(playerOne);
	$('.start').append(playerTwo);
	});
	var playerOne = 'x';
	var playerTwo = 'o';
	var posOne = 0;
	var posTwo = 0;
	$('.start').append(playerOne);
	$('.start').append(playerTwo);

	$(window).on('keypress', function handler (event) {
		if(event.which === 97) {
			if(posOne < 53) {
				if ( $('.box').text() === playerOne&&playerTwo ) {
  					$('.box').empty();
  					$('.'+ posTwo).text(playerTwo);
  					posOne++;
  					$('.'+ posOne).append(playerOne);
				} else if ($('.box').text() !== "" ){
  					$('.box').empty();
  					$('.'+ posTwo).text(playerTwo);
  					posOne++;
  					$('.'+ posOne).append(playerOne);
				}
			}
		} else if (event.which === 108) {
				if(posTwo < 53) {
				if ( $('.box').text() === playerOne&&playerTwo ) {
  					$('.box').empty();
  					$('.'+ posOne).text(playerOne);
  					posTwo++;
  					$('.'+ posTwo).append(playerTwo);
				} else if ($('.box').text() !== "" ){
  					$('.box').empty();
  					$('.'+ posOne).text(playerOne);
  					posTwo++;
  					$('.'+ posTwo).append(playerTwo);
				}
			}
		}
	}




)});


