function sequencer() {
  const v1 = new Tone.Player("../sounds/d1.mp3").toMaster();
  const v2 = new Tone.Player("../sounds/d2.mp3").toMaster();
  const v3 = new Tone.Player("../sounds/d3.mp3").toMaster();
  const v4 = new Tone.Player("../sounds/d4.mp3").toMaster();
  v3.autostart = true;
  // const key3 = new Tone.Player("../sounds/fart-03.mp3").toDestination();
  // let index = 0;

  // Tone.Transport.scheduleRepeat(repeat, "8n");
  // Tone.Transport.start();

  // function repeat() {
  //   let step = index % 8;
  //   let key1Fx = document.querySelector(`.kick input:nth-child(${step + 1})`);
  //   if (key1Fx.checked) {
  //     alert("x");
  //     key1.start();
  //   }
  //   index++;
  // }
}

sequencer();
