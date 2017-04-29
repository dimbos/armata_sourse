$(document).ready(function() {

	$(".toggle-mnu").click(function(){
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
	});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	$(".main-footer .toogle-mnu").click(function () {
			$("html, body").animate({scrollTop: $(document).height()}, "slow");
			return false;
	});
//по нажатию по полю внизу старницы возвращение наверх
		$(".arrow-bottom").click(function () {
			$("html, body").animate({scrollTop: $(".main-head").height() + 120}, "slow");
			return false;
	});

		$(".top").click(function () {
			$("html, body").animate({scrollTop: 0 }, "slow");
			return false;
	});

	$(".section-content .info-item").equalHeights();
	$(".s1-bottom .info-item").equalHeights();
	$(".section_3 .section-content .info-item").equalHeights();
	//$(".cards .card").equalHeights();

	$(".section_4").waypoint(function(){
		$(".section_4 .card").each(function(index){
			var self = $(this);
			setInterval(function(){
				self.removeClass("card-off").addClass("card-on");
	}, 150 * index );
	});
	},{
		offset: "10%"
	});


	$(".section_5").waypoint(function(){
		$(".section_5 .tc-item").each(function(index){
			var self = $(this);
			setTimeout(function(){
					var myAnimation = new DrawFillSVG({
					elementId: "tc-svg" + index
	});
				self.removeClass("").addClass("");
	}, 500 * index );
	});


	this.destroy();
	},{
		offset: "10%"
	});

	$(".slider").owlCarousel({
		items: 1,
		nav: true,
		navText: "",
		loop: true,
		autoplay: true,
		fluidSpeed: 1000,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		dotsSpeed: 1000,
		dragEndSpeed: 1000,
		});





	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(".forms").submit(function() {
		$.ajax({
			type: "POST",
			url: "/mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$(".forms").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


	$(".section-head p, .section-head h2").animated("fadeInRight");

	$(".info-item-wrap").animated("zoomIn");

		$(".slider .slide").animated("rollIn");

				$(".homesect.section_8 .forms").animated("fadeInRight");


		$(".section_2, .section_8").waypoint(function(){
		$(".s2-item-wrap, .s8-item").each(function(index){
			var self = $(this);
			setInterval(function(){
				self.addClass("on");
	}, 200 * index );
	});
	});
	});

//форма по кнопке
$(".homesect .section-bottom .buttons").click(function(){
	$("#callback h4").html($(this).text());
	$("#callback input[name=formname]").val($(this).text());

	}).magnificPopup({
	type: 'inline',
	mainClass: 'mfp-forms',
});


