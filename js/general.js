function plannerSlider() {
    if (jQuery('.featured-client-slider').length) {
        new Swiper('.featured-client-slider', {
            slidesPerView: 5,
            spaceBetween: 40,
            freeMode: true,
            scrollbar: {
                el: '.swiper-scrollbar',
                hide: false,
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3.6,
                    spaceBetween: 55
                },

                767: {
                    slidesPerView: 2.6,
                    spaceBetween: 20
                },
                576: {
                    slidesPerView: 2.3,
                    spaceBetween: 20
                },
                375: {
                    slidesPerView: 1.55,
                    spaceBetween: 20
                },
                320: {
                    slidesPerView: 1.25,
                    spaceBetween: 20
                }
            },
        });
    }

    var isDragging = false;
    var mouse_down = false;
    jQuery('.featured-client-slider,.custom-cursor-slider-section .custom-cursor-sibling')
        .on('mousedown', function () {
            isDragging = true;
            mouse_down = true;
            jQuery(this).closest(".custom-cursor-block").addClass("drag-cursor");
        })
        .on('mousemove', function () {
            isDragging = true;
            if (mouse_down == true) {
                jQuery(this).closest(".custom-cursor-block").addClass("drag-cursor");
            } else {
                jQuery(this).closest(".custom-cursor-block").removeClass("drag-cursor");
            }
        })
        .on('mouseup', function () {
            isDragging = false;
            mouse_down = false;
            jQuery(this).closest(".custom-cursor-block").removeClass("drag-cursor");
        });
}

function left_spacing() {
    if (jQuery(".primary-slider-section,.custom-cursor-slider-section .image-content-wrapper .image-block").length) {
        var container_offset = jQuery(".container").offset().left;
        if (jQuery(window).width() < 1200) {
            container_offset += 25;

        } else if (jQuery(window).width() < 768) {
            container_offset += 15;
        } else {
            container_offset += 67;
        }

        jQuery(".primary-slider-section .primary-slider-block").css("padding-left", container_offset);
        jQuery(".primary-slider-section .primary-slider-block .swiper-container .swiper-scrollbar").css("left", -container_offset);
        jQuery(".primary-slider-section .primary-slider-block .swiper-container .swiper-scrollbar").css("width", "calc(100% + " + container_offset + "px)");
    }
}

function custom_cursor() {
    jQuery('.custom-cursor-block').mousemove(function (e) {
        var x_offset = event.pageX - 60;
        var y_offset = event.pageY - 60;
        jQuery(this).find(".cursor").css("transform", "scale(1)");
        jQuery(this).find(".cursor").css("opacity", "1");
        jQuery(this).find(".cursor").css("top", y_offset + "px");
        jQuery(this).find(".cursor").css("left", x_offset + "px");
    });
    jQuery('.custom-cursor-block').mouseenter(function (e) {
        var x_offset = event.pageX - 60;
        var y_offset = event.pageY - 200;
        jQuery(this).find(".cursor").css("transform", "scale(1)");
        jQuery(this).find(".cursor").css("opacity", "1");
        jQuery(this).find(".cursor").css("top", y_offset + "px");
        jQuery(this).find(".cursor").css("left", x_offset + "px");
    });
    jQuery('.custom-cursor-block').mouseout(function (e) {
        jQuery(this).find(".cursor").css("opacity", "0");
        jQuery(this).find(".cursor").css("transform", "scale(0)");
    });

    $(".primary-slider-section .primary-slider-block .content-wrapper .border-btn").mouseenter(function (e) {        
        jQuery(this).closest(".primary-slider-block").addClass("hide-cursor");
    });
    $(".primary-slider-section .primary-slider-block .content-wrapper .border-btn").mouseout(function (e) {        
        jQuery(this).closest(".primary-slider-block").removeClass("hide-cursor");
    });
}

jQuery(document).ready(function () {

    plannerSlider();
    left_spacing();
    custom_cursor();

    jQuery("a[href='#']").click(function (e) {
        e.preventDefault();
    });

});

jQuery(window).resize(function () {
    plannerSlider();
    left_spacing();
});
