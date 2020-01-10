export default function openFullscreen() {
  if (document.body.requestFullscreen) {
	document.body.requestFullscreen();
  } else if (document.body.mozRequestFullScreen) { /* Firefox */
	document.body.mozRequestFullScreen();
  } else if (document.body.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
	document.body.webkitRequestFullscreen();
  } else if (document.body.msRequestFullscreen) { /* IE/Edge */
	document.body.msRequestFullscreen();
  }
}
