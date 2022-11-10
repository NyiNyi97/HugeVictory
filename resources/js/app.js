$(document).ready(function () {
	$(window).scroll(function () {
		if (this.scrollY > 20) {
			$('.NavBar').addClass('sticky');
		} else {
			$('.NavBar').removeClass('sticky');
		}
	});

	$('.menu-btn').click(function () {
		$('.NavBar .menu').toggleClass("active");
		$('.menu-btn i').toggleClass("active");
	});

	$('.customer-logos').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		arrows: false,
		dots: false,
		pauseOnHover: false,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 4
			}
		}, {
			breakpoint: 520,
			settings: {
				slidesToShow: 3
			}
		}]
	});

	$(".counter").counterUp({
		delay: 10,
		time: 1200,
	});

	$('li').on('click', function () {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});


});