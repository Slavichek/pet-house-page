$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll <= 10) {
            $(".header").removeClass("header--scroll");
        } else {
            $(".header").addClass("header--scroll");
        }
    });
    const menuBtn = document.querySelector(".menu-btn");
    let menuOpen = false;
    menuBtn.addEventListener("click", () => {
        if (!menuOpen) {
            menuBtn.classList.add("open");
            menuOpen = true;
        } else {
            menuBtn.classList.remove("open");
            menuOpen = false;
        }
    });
    $(".owl-carousel").owlCarousel({
        nav: true,
        loop: true,
        margin: 55,
        center: true,
        navText: [
            "<img src='./img/icons/prev-arrow.png'>",
            "<img src='./img/icons/next-arrow.png'>",
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 3,
            },
        },
    });
});
