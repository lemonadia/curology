const headerTag = document.querySelector("header");

const toggleHeader = function () {
  //how far we scrolled
  const pixels = window.pageYOffset;
  if (pixels > 100) {
    headerTag.classList.add("scrolled");
  } else {
    headerTag.classList.remove("scrolled");
  }
};

toggleHeader();
document.addEventListener("scroll", function () {
  toggleHeader();
});
