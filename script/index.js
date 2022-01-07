const title = ["We provide wealth building & advisory services.", "Directing personalized wealth management.", "Wealth management through experienced market insights.", "We are fiduciaries" , "Financial planning is life planning"]

const random_images = ["./images/SF/IMG_4874.jpeg", "./images/SF/IMG_4876.jpeg", "./images/SF/IMG_4878.jpeg", "./images/SF/IMG_4880.jpeg", "./images/SF/IMG_4881.jpeg", "./images/SF/IMG_4882.jpeg", "./images/SF/IMG_4883.jpeg", "./images/SF/IMG_4885.jpeg", "./images/SF/IMG_4888.jpeg", "./images/SF/IMG_4889.jpeg", "./images/SF/IMG_4890.jpeg", "./images/SF/IMG_8575_madrid.jpeg"]
const old_colors = ["#7D7772", "#645556", "#5B5B60", "#2B2B2B"];
const colors = ["65515C", "7D7773", "5A5C61", "4B4846"]

$(document).ready( function () {
	//set random title from title array
	const random = Math.floor(Math.random() * title.length);
	$("#title").text(title[random]);
	//set random image from random_images array
	const image = Math.floor(Math.random() * random_images.length);
	$("landing background").css("background-image", "url(" + random_images[image] + ")");
});

// hamburger menu open close
$("#nav-icon").click(function () {
	if ($("#nav-icon").hasClass("open")) {
		if ($("menu").attr("display", "flex")) {
			$("#nav-icon").removeClass("open");
			$("menu").stop().animate({
				opacity: "0",
				queue: false
			}).fadeOut();
		};
		if ($("description").attr("display", "flex")) {
			$("description").stop().fadeOut();
			$("body").removeClass("no-scroll");
		};
	} else if ($("#nav-icon").hasClass("slide-left")) {
		$("#nav-icon").addClass("open");
		$("menu").stop().animate({
			opacity: "1",
			queue: false
		}).css("display", "flex")
	}
});

// click side-bar link closes it
$("menu a").click(function () {
	close_side();
});

//close menu
function close_side() {
	if ($("#nav-icon").hasClass("open")) {
		$("#nav-icon").removeClass("open");
		$("menu").stop().animate({
			opacity: "0",
			queue: false
		}).fadeOut();
	}
}

//hover key words image follows mouse
// $("services ul").on("mouseenter mouseleave", function () {
// 	$(".random-image").stop().fadeToggle(250, "swing")
// 	// let random = Math.floor(Math.random() * random_images.length);
// 	// $(".random-image img").attr("src", random_images[random])
// 	$(document).mousemove(function (e) {
// 		$(".random-image").css({
// 			left: e.pageX,
// 			top: e.pageY,
// 		});
// 	});
// });

//click services link opens description
$("#services li").click(function () {
	switch (this.className) {
		case "income-investment":
			$("#income-investment").slideToggle(250, "swing")
			break;
		case "retirement":
			$("#retirement").slideToggle(250, "swing")
			break;
		case "tax":
			$("#tax").slideToggle(250, "swing")
			break;
		case "estate":
			$("#estate").slideToggle(250, "swing")
			break;
		case "risk":
			$("#risk").slideToggle(250, "swing")
			break;
	}
});

//expand person info
$("#about people grid div").click(function () {
	switch (this.className) {
		case "gary":
			if ($("#gary").css("display") == "none") {
				$('html, body').animate({
					scrollTop: $(".gary").offset().top
				}, 500);
			}
			$("#gary").slideToggle(250, "swing")
			break;
		case "don":
			if ($("#don").css("display") == "none") {
				$('html, body').animate({
					scrollTop: $(".don").offset().top
				}, 500);
			}
			$("#don").slideToggle(250, "swing")
			break;
		case "randall":
			if ($("#randall").css("display") == "none") {
				$('html, body').animate({
					scrollTop: $(".randall").offset().top
				}, 500);
			}
			$("#randall").slideToggle(250, "swing")
			break;
		case "john":
			if ($("#john").css("display") == "none") {
				$('html, body').animate({
					scrollTop: $(".john").offset().top
				}, 500);
			}
			$("#john").slideToggle(250, "swing")
			break;
		case "kristine":
			if ($("#kristine").css("display") == "none") {
				$('html, body').animate({
					scrollTop: $(".kristine").offset().top
				}, 500);
			}
			$("#kristine").slideToggle(250, "swing")
			break;
	}
});
var prev = 0;
$(window).on('scroll', function () {
	var scrollTop = $(window).scrollTop();
	$("nav img").toggleClass("hidden", scrollTop > prev);
	prev = scrollTop;
});

//change background color when div in view
$(window).scroll(function () {
	if ($(window).scrollTop() >= $("landing").offset().top && $(window).scrollTop() <= $("#services").offset().top) {
		$("body").css({
			backgroundColor: '#65515C'
		});
		$("#approach").addClass("slide-up");
	}
	if ($(window).scrollTop() >= $("#approach").offset().top && $(window).scrollTop() <= $("#about").offset().top) {
		$("body").css({
			backgroundColor: '#7D7773'
		});
		$("#services").addClass("slide-up");
	}
	if ($(window).scrollTop() >= $("#about").offset().top && $(window).scrollTop() <= $("#footer").offset().top) {
		$("body").css({
			backgroundColor: '#5A5C61'
		});
	}
	if ($(window).scrollTop() >= $("#footer").offset().top - $("#footer").outerHeight()) {
		$("body").css({
			backgroundColor: '#4B4846'
		});
	}
})

//disclosure expand
$("disclosure a").click(function () {
	$("disclosure paragraph").slideToggle(250, "swing")
	$("html, body").animate({
		scrollTop: $(document).height()
	}, "slow");
})

// click link with hash scrolls to div with matching id
$('a[href*="#"]')
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function (event) {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				event.preventDefault();
				$('html, body').delay(200).animate({
					left: target.offset().left,
					scrollTop: target.offset().top
				}, 1000, function () {
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) {
						return false;
					} else {
						$target.attr('tabindex', '-1');
						$target.focus();
					};
				});
			}
		}
	});