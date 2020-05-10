function removeFX(evt) {
  if (evt.propertyName !== "transform") return;
  evt.target.classList.remove("isOn");
  soundKey.classList.remove("displayBoxImg");
}

function playFX(evt) {
  // checking if the key pressed is within the key code we have avaliable
  const myAudio = document.querySelector(`audio[data-key="${evt.keyCode}"]`);
  const soundKey = document.querySelector(`.box[data-key="${evt.keyCode}"]`);
  if (!myAudio) return;

  // resetting the audio time so we can play it again and again
  myAudio.currentTime = 0;
  myAudio.play();
  soundKey.classList.add("isOn");
  soundKey.classList.add("displayBoxImg");
}

const fxKeys = Array.from(document.querySelectorAll(".box"));
fxKeys.forEach((soundKey) =>
  soundKey.addEventListener("transitionend", removeFX)
);
window.addEventListener("keydown", playFX);
