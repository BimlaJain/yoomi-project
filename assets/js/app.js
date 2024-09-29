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
// link slider js 
const tabs = document.querySelectorAll('.tab-item');
const contents = document.querySelectorAll('.tab-pera');
console.log(tabs);
const removeActiveClasses = () => {
    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));
};
const setActiveTab = (tab) => {
    const targetId = tab.getAttribute('data-target');
    const targetContent = document.getElementById(targetId);
    tab.classList.add('active');
    targetContent.classList.add('active');
};
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        removeActiveClasses();
        setActiveTab(tab);
    });
});