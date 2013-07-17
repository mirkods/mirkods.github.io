$('#show-forcolini').click(function(e){
	PLASM('plasm1').globalize();
	$('#plasm1').fadeOut();
	showModelForcolini();
	$('#plasm1').fadeIn(3000);
});

$('#show-rossi').click(function(e){
	PLASM('plasm2').globalize();
	$('#plasm2').fadeOut();
	showModelRossi();
	$('#plasm2').fadeIn(3000);
});

$('#plasm1').mouseover(function() {
  document.getElementById("body").style.overflow = 'hidden';
});

$('#plasm2').mouseover(function() {
  document.getElementById("body").style.overflow = 'hidden';
});

$('#plasm1').mouseout(function() {
  document.getElementById("body").style.overflow = 'auto';
});

$('#plasm2').mouseout(function() {
  document.getElementById("body").style.overflow = 'auto';
});

