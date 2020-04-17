const animatedTags = document.querySelectorAll("h2, h3, img, p, a.button");

// fade out on load

animatedTags.forEach((tag) => {
  tag.style.opacity = 0;
});

const fadeIn = function () {
  //look at all the animated tags and see with the getBoundingClientRect if it is the window

  let delay = 0.05;
  animatedTags.forEach((tag) => {
    const tagTop = tag.getBoundingClientRect().top;
    const bottomTag = tag.getBoundingClientRect().bottom;
    if (tagTop < window.innerHeight && bottomTag > 0) {
      tag.style.animation = `fadein 1s ${delay}s both`;
      delay = delay + 0.05;
    } else {
      tag.style.opacity = 0;
      tag.style.animation = "";
    }
  });
};

fadeIn();

document.addEventListener("scroll", function () {
  fadeIn();
});
//on browser resize run fade in
window.addEventListener("resize", function () {
  fadeIn();
});
