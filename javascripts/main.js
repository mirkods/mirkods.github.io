$('#show-forcolini').click(function(e){
	console.log('main-forcolini.js')
	viewForcolini();
	$('#separator2 > #plasm').fadeIn(3000);
});

$('#show-rossi').click(function(e){
	console.log('main-rossi.js')
	viewRossi();
	$('#separator3 > #plasm').fadeIn(3000);
});


$('#plasm').mouseover(function() {
  document.getElementById("body").style.overflow = 'hidden';
});


$('#plasm').mouseout(function() {
  document.getElementById("body").style.overflow = 'auto';
});


