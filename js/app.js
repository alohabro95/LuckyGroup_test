(function ($, document, window) {
  $(document).ready(function () {
    // Cloning main navigation for mobile menu
    $(".mobile-navigation").append($(".main-navigation .menu").clone());

    // Mobile menu toggle
    $(".menu-toggle").click(function () {
      $(".mobile-navigation").slideToggle();
    });

    $(".offer img, .news img").panr({
      sensitivity: 15,
      scale: false,
      scaleOnHover: true,
      scaleTo: 1.2,
      scaleDuration: 0.25,
      panY: true,
      panX: true,
      panDuration: 1.25,
      resetPanOnMouseLeave: false,
    });

    // $(".testimonial-slider, .hero-slider").flexslider({
    // 	directionNav: false,
    // 	controlNav: true
    // });

    if ($(".map").length) {
      $(".map").gmap3(
        {
          map: {
            options: {
              maxZoom: 14,
              scrollwheel: false,
            },
          },
          marker: {
            address: "40 Sibley St, Detroit",
            // options: {
            // 	icon: new google.maps.MarkerImage(
            // 		"images/map-marker.png",
            // 		new google.maps.Size(43, 53, "px", "px")
            // 	)
            // }
          },
        },
        "autofit"
      );
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".dublicate-block__form");
    const submitButton = form.querySelector('button[type="submit"]');

    submitButton.addEventListener("click", function (event) {
      event.preventDefault();
      form.style.display = "none";

      const message = document.createElement("div");
      message.classList.add("alert", "alert-success");
      message.textContent = "Bedankt voor het inschrijven";

      form.parentNode.appendChild(message);
    });
  });

  $(window).load(function () {});
})(jQuery, document, window);
