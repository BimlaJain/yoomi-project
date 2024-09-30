function navMenu() {
    const navBtn = document.getElementById('navBtn');
    navBtn.classList.toggle('active');
    document.body.classList.toggle("overflow-hidden")
}
// slider js
$('.slider').slick({
    centerMode: true,
    dots: false,
    Infinity: false,
    autoplay: true,
    autoplaySpeed: 2000,
    // centerPadding: '60px',
    slidesToShow: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

// counter js 
var counted = 0;
$(window).scroll(function () {
    var oTop = $("#counter").offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
        $(".count").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-count");
            $({
                countNum: $this.text(),
            }).animate(
                {
                    countNum: countTo,
                },

                {
                    duration: 2000,
                    easing: "swing",
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    },
                }
            );
        });
        counted = 1;
    }
});
// tab slider js
$('.tab-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots:false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    asNavFor: '.tabs-slider'
});
$('.tabs-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.tab-content ',
    dots: true,
    centerMode: true,
    focusOnSelect: true
});
