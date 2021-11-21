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
})();
//# sourceMappingURL=app.js.map
