export default function openFullscreen() {
  if (document.requestFullscreen) {
	document.requestFullscreen();
  } else if (document.mozRequestFullScreen) { /* Firefox */
	document.mozRequestFullScreen();
  } else if (document.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
	document.webkitRequestFullscreen();
  } else if (document.msRequestFullscreen) { /* IE/Edge */
	document.msRequestFullscreen();
  }
}
