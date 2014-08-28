$(document).ready(function(){
	$(".btn_menu").click(function(){
		$("#menu").slideDown('slow');
		$("#buttons").hide('slow');
		$(this).hide("fast");
		$(".btn_menu_hide").show('fast');
	});

	$(".btn_menu_hide").click(function(){
		$("#menu").slideUp('slow');
		$("#buttons").show('slow');
		$(this).hide("fast");
		$(".btn_menu").show('fast');
	});



	$(".btn_mensagens").click(function(){
		$("#menu").slideDown('slow');
		$("#buttons").hide('slow');
		$(this).hide("fast");
		$(".btn_mensagens_hide").show('fast');
	});

	$(".btn_mensagens_hide").click(function(){
		$("#menu").slideUp('slow');
		$("#buttons").show('slow');
		$(this).hide("fast");
		$(".btn_mensagens").show('fast');
	});


	$(".primeira").click(function(){
		$(".primeira ul").slideDown();
		$(".segunda ul").slideUp();
		$(".terceira ul").slideUp();
		$(".quarta ul").slideUp();
	});
	$(".segunda").click(function(){
		$(".primeira ul").slideUp();
		$(".segunda ul").slideDown();
		$(".terceira ul").slideUp();
		$(".quarta ul").slideUp();
	});
	$(".terceira").click(function(){
		$(".primeira ul").slideUp();
		$(".segunda ul").slideUp();
		$(".terceira ul").slideDown();
		$(".quarta ul").slideUp();
	});
	$(".quarta").click(function(){
		$(".primeira ul").slideUp();
		$(".segunda ul").slideUp();
		$(".terceira ul").slideUp();
		$(".quarta ul").slideDown();
	});


	$(".item").click(function(){
		alert($(this).html());
	});
});