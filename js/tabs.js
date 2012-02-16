// JavaScript Document
$(document).ready(function () {

		$('.players img').hide();
		$('.nav li').css("background-color", "#FC9");
	
		$('.tab1').on('click', function () {
			$('.nav li').css("background-color", "#FC9");
			$('.tab1').css("background-color", "#fff");
			$('.players img:not(.thomas)').fadeOut(500, function() {
				$('.players .thomas').fadeIn();
			});
		});
	
		$('.tab2').on('click', function () {
			$('.nav li').css("background-color", "#FC9");
			$('.tab2').css("background-color", "#fff");
			$('.players img:not(.maravich)').fadeOut(500, function() {
				$('.players .maravich').fadeIn();
			});
		});
	
		$('.tab3').on('click', function () {
			$('.nav li').css("background-color", "#FC9");
			$('.tab3').css("background-color", "#fff");
			$('.players img:not(.olajuwon)').fadeOut(500, function() {
				$('.players .olajuwon').fadeIn();
			});
		});
	
		$('.tab4').on('click', function () {
			$('.nav li').css("background-color", "#FC9");
			$('.tab4').css("background-color", "#fff");
			$('.players img:not(.jordan)').fadeOut(500, function() {
				$('.players .jordan').fadeIn();
			});
		});
	
	}); 