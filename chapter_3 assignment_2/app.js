const bodyColor = document.querySelector("body");

function handleScreen() {
  const width = window.innerWidth;
  const BIG_SCREEN = "yellow-screen";
  const MEDIUM_SCREEN = "purple-screen";
  const SMALL_SCREEN = "blue-screen";

  if (width >= 700) {
    bodyColor.classList.add(BIG_SCREEN);
    bodyColor.classList.remove(MEDIUM_SCREEN);
  } else if (window.innerWidth > 400 && window.innerWidth < 700) {
    bodyColor.classList.add(MEDIUM_SCREEN);
    bodyColor.classList.remove(BIG_SCREEN, SMALL_SCREEN);
  } else {
    bodyColor.classList.add(SMALL_SCREEN);
    bodyColor.classList.remove(MEDIUM_SCREEN);
  }
}

handleScreen();
window.addEventListener("resize", handleScreen);
