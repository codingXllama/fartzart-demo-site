window.addEventListener("load", () => {
  const mySounds = document.querySelectorAll(".sound");
  const fxKeys = Array.from(document.querySelectorAll(".box"));
  const soundKey = document.querySelector(".box");
  const app = document.querySelector(".nex");
  const img = document.querySelector(".img");

  //   const nex = document.querySelectorAll;
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#143d9c",
    "#c060d3",
    "#d3d160",
    "#616161",
    "#ffa81c",
    "#d21cff",
    "#b12714",
    " #f75104",
  ];

  // testing sound
  fxKeys.forEach((fxKeys, index) => {
    fxKeys.addEventListener("click", function () {
      mySounds[index].currentTime = 0;
      mySounds[index].play();
      fxKeys.classList.add("isOn");
      fxKeys.classList.add("displayBoxImg");
      bubbleCreator(index);
    });
  });

  // creating the visual bubbless
  const bubbleCreator = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    // bubble.style.backgroundColor = colors[index];
    app.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 2s ease";
    bubble.addEventListener("animationend", function () {
      visual.removeChild(this);
    });
  };

  fxKeys.forEach((soundKey) =>
    soundKey.addEventListener("transitionend", function removeFX(evt) {
      if (evt.propertyName !== "transform") return;
      evt.target.classList.remove("isOn");
      evt.target.classList.remove("displayBoxImg");
    })
  );
});
