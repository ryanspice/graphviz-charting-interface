export default function closeFullscreen() {

  if (document.exitFullscreen) {
	document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
	document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
	document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
	document.msExitFullscreen();
  }
}
