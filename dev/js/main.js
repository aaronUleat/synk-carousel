(function() {
	$(function() {
		$('.single-item').slick({
			arrows: false
		});
		$('.items-carousel').slick({
			slidesToShow: 5,
			prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
			slidesToScroll: 1,
			asNavFor: '.single-item',
			dots: false,
			centerMode: false,
			arrows: true,
			focusOnSelect: true,
			responsive: [
					{
						breakpoint: 960,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
							centerMode: true,
							centerPadding: '55px',
							arrows: true
						}
					},
					{
						breakpoint: 768,
				           settings: {
								slidesToShow:2,
								slidesToScroll: 1,
								centerMode: true,
								centerPadding: '55px',
								arrows: true
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							dots: false,
							centerMode: true,
							centerPadding: '55px',
							arrows: true
						}
					}
			]

		});
	})
})();