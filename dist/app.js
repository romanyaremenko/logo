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
  setInterval(function() {
    logoNeon.classList.add("neon");
  }, 1500);
  setInterval(function() {
    logoNeon.classList.remove("neon");
  }, 3e3);
})();
//# sourceMappingURL=app.js.map
