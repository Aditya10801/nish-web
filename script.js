document.addEventListener('DOMContentLoaded', function() {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'), // Specify the scroll container
      smooth: true // Enable smooth scrolling
      // Add any additional configuration options here
    });
  });
  document.addEventListener("mousemove", function (event) {
    var cursor = document.querySelector(".custom-cursor");
    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";
  });
  