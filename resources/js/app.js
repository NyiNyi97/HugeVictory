$(document).ready(function () {
	// $(window).scroll(function () {
	// 	if (this.scrollY > 20) {
	// 		$('header').addClass('sticky');
	// 	} else {
	// 		$('header').removeClass('sticky');
	// 	}
	// });

	var swiper = new Swiper(".mySwiper", {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		centerSlide: 'true',
		fade: 'true',
		grabCursor: 'true',
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			0: {
				slidesPerView: 1
			},
			520: {
				slidesPerView: 2
			},
			950: {
				slidesPerView: 3
			}
		}
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