/***************************************************
==================== JS INDEX ======================
****************************************************

// Data Js
// Preloader Js
// Search Bar Js
// Sticky Js
// Mobile Menu Overlay Js
// Mobile Menu Js
// Video Js
// Hamburger Menu Js
// Fun Fact Js
// Hero Js
// Thumb Slider Js
// Service Slider Js
// Brand Slider Js
// testimonial Js
// testimonial2 Js
// Testimonial3 Js
// Portfolio Slider Js
// Blog Slider Js
// Rating Js
// Progress Js
// Accordion Js
// Popup Js
// WOW Js

****************************************************/

(function ($) {
   "use strict";

   // Data Js
   $("[data-bg-image]").each(function () {
      var $this = $(this),
         $image = $this.data("bg-image");
      $this.css("background-image", "url(" + $image + ")");
   });

   // Preloader Js
   function loading() {
      document.querySelectorAll(".bar").forEach(function (current) {
         let startWidth = 0;
         const endWidth = current.dataset.size;
         const interval = setInterval(frame, 20);
         function frame() {
            if (startWidth >= endWidth) {
               clearInterval(interval);
            } else {
               startWidth++;
               current.style.width = `${endWidth}%`;
               current.firstElementChild.innerText = `${startWidth}%`;
            }
         }
      });
   }
   setTimeout(loading, 1000);
   $(window).on("load", function () {
      const preloader = $(".preloader");
      preloader.delay(600).fadeOut();
   });
   $(".preloader .tj-cancel-btn").on("click", function () {
      $(".preloader").fadeOut();
   });

   // Search Bar Js
   $(".header-search .search").on("click", function () {
      $(".search_popup").addClass("search-opened");
      $(".search-popup-overlay").addClass("search-popup-overlay-open");
   });
   $(".search_close_btn").on("click", function () {
      $(".search_popup").removeClass("search-opened");
      $(".search-popup-overlay").removeClass("search-popup-overlay-open");
   });
   $(".search-popup-overlay").on("click", function () {
      $(".search_popup").removeClass("search-opened");
      $(this).removeClass("search-popup-overlay-open");
   });

   // Sticky Js
   $(window).scroll(function () {
      var Width = $(document).width();
      if ($("body").scrollTop() > 250 || $("html").scrollTop() > 250) {
         $(".header-sticky").addClass("sticky");
      } else {
         $(".header-sticky").removeClass("sticky");
      }
   });

   // Mobile Menu Overlay Js
   var canva_expander = $(".canva_expander");
   if (canva_expander.length) {
      $(".canva_expander, #canva_close, #canvas-overlay-bg").on("click", function (e) {
         e.preventDefault();
         $("body").toggleClass("canvas_expanded");
      });
   }

   // Mobile Menu Js
   $(".main-mobile-menu").meanmenu({
      meanMenuContainer: ".mobile_menu",
      meanScreenWidth: "991",
      meanExpand: ['<i class="fa-light fa-angle-right"></i>'],
   });
   $(".menu-bar").on("click", function () {
      $(".menu-bar").addClass("menu-bar-toggeled");
   });

   // Video Js
   var popupvideos = $(".popup-videos-button");
   if (popupvideos.length) {
      $(".popup-videos-button").magnificPopup({
         disableOn: 10,
         type: "iframe",
         mainClass: "mfp-fade",
         removalDelay: 160,
         preloader: false,
         fixedContentPos: false,
      });
   }

   // Hamburger Menu Js
   $(".menu-bar").on("click", function () {
      $(".hamburger-area").addClass("opened");
      $(".body-overlay").addClass("opened");
   });
   $(".hamburger_close_btn").on("click", function () {
      $(".hamburger-area").removeClass("opened");
      $(".body-overlay").removeClass("opened");
      $(".menu-bar").removeClass("menu-bar-toggeled");
   });
   $(".body-overlay").on("click", function () {
      $(".hamburger-area").removeClass("opened");
      $(".body-overlay").removeClass("opened");
      $(".offset_canvas").removeClass("show");
      $(".menu-bar").removeClass("menu-bar-toggeled");
   });

   // Fun Fact Js
   if ($(".odometer").length > 0) {
      $(".odometer").waypoint(
         function () {
            var odo = $(".odometer");
            odo.each(function () {
               var countNumber = $(this).attr("data-count");
               $(this).html(countNumber);
            });
         },
         {
            offset: "80%",
            triggerOnce: true,
         }
      );
   }

   // Hero Js
   var hero = new Swiper(".hero-slider", {
      speed: 3000,
      loop: true,
      slidesPerView: 1,
      autoplay: true,
      effect: "fade",
      navigation: {
         prevEl: ".hero-prev",
         nextEl: ".hero-next",
      },
   });

   // Thumb Slider Js
   var thumb1 = new Swiper(".thumb-slider1", {
      direction: "vertical",
      spaceBetween: 0,
      slidesPerView: "auto",
   });
   var thumb2 = new Swiper(".thumb-slider2", {
      spaceBetween: 0,
      thumbs: {
         swiper: thumb1,
      },
   });

   // Service Slider Js
   if ($(".tj-service-slider").length > 0) {
      var service = new Swiper(".tj-service-slider", {
         slidesPerView: 3,
         spaceBetween: 24,
         loop: true,
         autoplay: {
            delay: 9000,
         },
         pagination: {
            el: ".service-pagination",
            clickable: true,
         },
         breakpoints: {
            320: {
               slidesPerView: 1,
            },
            576: {
               slidesPerView: 1,
            },
            640: {
               slidesPerView: 2,
            },
            768: {
               slidesPerView: 2,
            },
            992: {
               slidesPerView: 3,
            },
            1024: {
               slidesPerView: 3,
            },
         },
      });
   }

   // Brand Slider Js
   if ($(".tj-brand-slider").length > 0) {
      var brand = new Swiper(".tj-brand-slider", {
         slidesPerView: 6,
         loop: true,
         autoplay: {
            delay: 5000,
         },
         breakpoints: {
            320: {
               slidesPerView: 4,
            },
            576: {
               slidesPerView: 4,
            },
            640: {
               slidesPerView: 4,
            },
            768: {
               slidesPerView: 4,
            },
            992: {
               slidesPerView: 5,
            },
            1024: {
               slidesPerView: 6,
            },
         },
      });
   }

   // Brand Slider Js
   if ($(".tj-brand-slider2").length > 0) {
      var brand = new Swiper(".tj-brand-slider2", {
         slidesPerView: 8,
         spaceBetween: 25,
         loop: true,
         autoplay: {
            delay: 5000,
         },
         breakpoints: {
            320: {
               slidesPerView: 2,
            },
            576: {
               slidesPerView: 4,
            },
            768: {
               slidesPerView: 5,
            },
            992: {
               slidesPerView: 5,
            },
            1200: {
               slidesPerView: 6,
            },
            1024: {
               slidesPerView: 6,
            },
            1600: {
               slidesPerView: 8,
            },
         },
      });
   }

   // testimonial Js
   if ($(".testimonial-slider").length > 0) {
      var hero = new Swiper(".testimonial-slider", {
         slidesPerView: 1,
         spaceBetween: 0,
         loop: true,
         autoplay: {
            delay: 9000,
         },
         navigation: {
            prevEl: ".testimonial-prev",
            nextEl: ".testimonial-next",
         },
      });
   }

   // testimonial2 Js
   if ($(".testimonial-slider2").length > 0) {
      var hero = new Swiper(".testimonial-slider2", {
         slidesPerView: "auto",
         spaceBetween: 24,
         centeredSlides: false,
         loop: true,
         autoplay: {
            delay: 9000,
         },
         pagination: {
            el: ".testimonial-pagination",
            clickable: true,
         },
         breakpoints: {
            0: {
               slidesPerView: 1,
               spaceBetween: 0,
            },
            576: {
               slidesPerView: "auto",
               spaceBetween: 24,
            },
         },
      });
   }

   // Testimonial3 Js
   if ($(".content_carousel").length > 0) {
      let testimonial2Content = new Swiper(".content_carousel", {
         slidesPerView: "auto",
         spaceBetween: 0,
         centeredSlides: true,
         loop: true,
         speed: 1000,
         autoplay: {
            delay: 5000,
         },
         navigation: {
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
         },
      });
      let testimonial2Thumbs = new Swiper(".thumbs_carousel", {
         slidesPerView: "auto",
         spaceBetween: 30,
         centeredSlides: true,
         loop: true,
         slideToClickedSlide: true,
         breakpoints: {
            768: {
               spaceBetween: 30,
            },
         },
      });
      testimonial2Content.controller.control = testimonial2Thumbs;
      testimonial2Thumbs.controller.control = testimonial2Content;
   }

   // Portfolio Slider Js
   if ($(".tj-portfolio-slider").length > 0) {
      var service = new Swiper(".tj-portfolio-slider", {
         slidesPerView: "3",
         spaceBetween: 24,
         centeredSlides: true,
         loop: true,
         autoplay: {
            delay: 8500,
         },
         pagination: {
            el: ".portfolio-pagination",
            clickable: true,
         },
         breakpoints: {
            0: {
               slidesPerView: 1,
               spaceBetween: 0,
            },
            576: {
               slidesPerView: "auto",
               spaceBetween: 24,
            },
         },
      });
   }

   // Blog Slider Js
   if ($(".tj-blog-wrapper-slider").length > 0) {
      var blog = new Swiper(".tj-blog-wrapper-slider", {
         slidesPerView: 1,
         spaceBetween: 24,
         loop: true,
         autoplay: {
            delay: 9000,
         },
         navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
         },
      });
   }

   // Rating Js
   if ($(".fill-ratings span").length > 0) {
      var star_rating_width = $(".fill-ratings span").width();
      $(".star-ratings").width(star_rating_width);
   }

   // Progress Js
   $(document).ready(function () {
      startAnimation();
      function startAnimation() {
         jQuery(".skills").each(function () {
            jQuery(this)
               .find(".skillbar")
               .animate(
                  {
                     width: jQuery(this).attr("data-percent"),
                  },
                  4000
               );
         });
      }
   });

   // Accordion Js
   if ($(".accordion-item").length > 0) {
      $(".accordion-item .faq-title").on("click", function () {
         if ($(this).parent().hasClass("active")) {
            $(this).parent().removeClass("active");
         } else {
            $(this).parent().siblings().removeClass("active");
            $(this).parent().addClass("active");
         }
      });
   }

   // Popup Js
   $(document).ready(function () {
      $(".popup-gallery").magnificPopup({
         delegate: "a",
         type: "image",
         mainClass: "mfp-fade",
         gallery: {
            enabled: true,
         },
      });
   });

   // WOW Js
   $(window).on("load", function () {
      var wow = new WOW({
         boxClass: "wow", // default
         animateClass: "animated", // default
         offset: 0, // default
         mobile: true, // default
         live: true, // default
      });
      wow.init();
   });
})(jQuery);
