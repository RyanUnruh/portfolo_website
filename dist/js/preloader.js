// Preloader
// $(window).load(function () {
//   // Animate loader off screen
//   $(".se-pre-con").fadeOut("slow");
// });

function fadeOutEffect() {
  var fadeTarget = document.getElementById("target");
  var fadeEffect = setInterval(function () {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1;
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.08;
    } else {
      clearInterval(fadeEffect);
    }
  }, 20);
}

window.addEventListener("load", (event) => {
  setTimeout(function () {
    fadeOutEffect();
  }, 2000);
});
// window.onload = (event) => {};
