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
      delay = 4500;
      logoNeon.classList.remove("neon");
      document.querySelector(".logo__neon").animate([
        { opacity: "1" },
        { opacity: "1" }
      ], {
        duration: 0.01,
        iterations: Infinity
      });
    } else {
      delay = 1e3;
      logoNeon.classList.add("neon");
      document.querySelector(".neon").animate([
        { opacity: "1" },
        { opacity: "0.9" }
      ], {
        duration: 0.01,
        iterations: Infinity
      });
    }
    timerId = setTimeout(request, delay);
  }, delay);
})();
//# sourceMappingURL=app.js.map
