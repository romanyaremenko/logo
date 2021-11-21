(() => {
  // src/js/home.js
  var HomePage = () => {
    if (document.querySelector(".home-page")) {
      console.log("home page");
    }
  };

  // src/app.js
  window.addEventListener("load", function(event) {
    HomePage();
  });
  var logoNeon = document.querySelector(".logo__neon");
  var delay = 1500;
  var timerId = setTimeout(function request() {
    if (logoNeon.classList.contains("neon")) {
      delay = 5e3;
      logoNeon.classList.remove("neon");
    } else {
      delay = 500;
      logoNeon.classList.add("neon");
    }
    timerId = setTimeout(request, delay);
  }, delay);
})();
//# sourceMappingURL=app.js.map
