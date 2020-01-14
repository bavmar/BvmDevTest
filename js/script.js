
$(window).bind('scroll', function() {
        if($(window).scrollTop() >= $('#header').offset().top - 150) {
          $('.main-nav li a').removeClass('active');
          $('.main-nav li #homez').addClass('active');
    }
    if($(window).scrollTop() >= $('#service').offset().top - 150) {
          $('.main-nav li a').removeClass('active');
          $('.main-nav li #servicez').addClass('active');
    }
    if($(window).scrollTop() >= $('#spotlight').offset().top - 150) {
          $('.main-nav li a').removeClass('active');
          $('.main-nav li #spotlightz').addClass('active');
    }
        if($(window).scrollTop() >= $('#software').offset().top - 150) {
          $('.main-nav li a').removeClass('active');
          $('.main-nav li #softwarez').addClass('active');
    }
    if($(window).scrollTop() >= $('#faq').offset().top - 150) {
          $('.main-nav li a').removeClass('active');
          $('.main-nav li #faqz').addClass('active');
    }
        if($(window).scrollTop() >= $('#contact').offset().top - 150) {
          $('.main-nav li a').removeClass('active');
          $('.main-nav li #contactz').addClass('active');
    }
});
jQuery(document).ready(function() {
	//Tab bois
	$(".tab-header").click(function () {
		$header = $(this);
		$content = $header.next();
		$plusminus = $header.children('svg');
		$plusminus.toggleClass("fa-plus fa-minus");
		$content.slideToggle(500);
	});
    
 	$('#roblox-exploit').click(function(){
		swal({
			title: "Notice!",
			text: "By downloading this file, you will be redirected to a few ads. This is to keep our website running. And our software for free.",
			type: "warning",
			showCancelButton: true,
			confirmButtonClass: "btn-succes",
			confirmButtonText: "Download",
			closeOnConfirm: false
		},
		function(){

			window.location.href = "http://stackoverflow.com";
		});
	});
});
jQuery("time.timeago").timeago();
	var selector = '.main-nav a';
	$(selector).on('click', function(){
		$(selector).removeClass('active');
		$(this).addClass('active');
	});
	$(window).load(function() {
		$('.main-nav li a, .servicelink').bind('click', function(event) {
			var $anchor = $(this);

			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - 102
			}, 1500, 'easeInOutExpo');
			if ($(window).width() < 768) {
				$('.main-nav').hide();
			}
			event.preventDefault();
		});
	})

	$(window).load(function() {
		var $container = $('.portfolioContainer'),
			$body = $('body'),
			colW = 375,
			columns = null;


		$container.isotope({
			// disable window resizing
			resizable: true,
			masonry: {
				columnWidth: colW
			}
		});

		$(window).smartresize(function() {
			// check if columns has changed
			var currentColumns = Math.floor(($body.width() - 30) / colW);
			if (currentColumns !== columns) {
				// set new column count
				columns = currentColumns;
				// apply width to container manually, then trigger relayout
				$container.width(columns * colW)
					.isotope('reLayout');
			}

		}).smartresize(); // trigger resize to set container width
		$('.portfolioFilter a').click(function() {
			$('.portfolioFilter .current').removeClass('current');
			$(this).addClass('current');

			var selector = $(this).attr('data-filter');
			$container.isotope({

				filter: selector,
			});
			return false;
		});

	});

	wow = new WOW({
		animateClass: 'animated',
		offset: 100
	});
	wow.init();

	$('.Portfolio-box').magnificPopup({
		delegate: 'a',
		type: 'image'
	});

	if(window.canRunAds === undefined ){
		console.log("ADDBLOCK DETECTED REEEEE");
	}


