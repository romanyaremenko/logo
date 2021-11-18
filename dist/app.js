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
  function neonToggle() {
    if (logoNeon.classList.contains("neon")) {
      logoNeon.classList.remove("neon");
    } else {
      logoNeon.classList.add("neon");
    }
  }
  setInterval(function() {
    neonToggle();
  }, 3e3);
})();
//# sourceMappingURL=app.js.map
