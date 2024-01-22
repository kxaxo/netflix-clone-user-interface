$(document).ready(() => {
    $(window).scroll(() => {
        const scroll = $(window).scrollTop();
        if (scroll > 100) {
            $(".netflix-navbar").css("background", "#0C0C0C");
        } else {
            $(".netflix-navbar").css("background", "transparent");
        }
    })
})