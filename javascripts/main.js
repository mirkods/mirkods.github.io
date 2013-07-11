$('#show-forcolini').click(function(e){
	console.log('main.js')
	viewForcolini();
	$('#separator2 > #plasm').fadeIn(3100);
});

$('#plasm').mouseover(function() {
  document.getElementById("body").style.overflow = 'hidden';
});


$('#plasm').mouseout(function() {
  document.getElementById("body").style.overflow = 'auto';
});


