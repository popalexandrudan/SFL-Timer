const startCropsEl = document.getElementById("startCrops");
const resetCropsEl = document.getElementById("resetCrops");
const audioCrops = new Audio("Crops.mp3");

let hoursCropsEl = document.getElementById("hoursCrops");
let minutesCropsEl = document.getElementById("minutesCrops");
let secondsCropsEl = document.getElementById("secondsCrops");

let startTimerCrops;
let startTimerFruits;
let startTimerWood;
let startTimerStone;
let startTimerIron;
let startTimerGold;

const timerCrops = () => {
  if (
    hoursCropsEl.value == 0 &&
    minutesCropsEl.value == 0 &&
    secondsCropsEl.value == 0
  ) {
    hoursCropsEl.value = "0";
    minutesCropsEl.value = "0";
    secondsCropsEl.value = "0";
    hoursCropsEl.disabled = false;
    minutesCropsEl.disabled = false;
    secondsCropsEl.disabled = false;
    startCropsEl.disabled = false;
    audioCrops.play();
    clearInterval(startTimerCrops);
  } else if (secondsCropsEl.value != 0) {
    secondsCropsEl.value--;
  } else if (minutesCropsEl.value != 0 && secondsCropsEl.value == 0) {
    secondsCropsEl.value = 59;
    minutesCropsEl.value--;
  } else if (hoursCropsEl.value != 0 && minutesCropsEl.value == 0) {
    minutesCropsEl.value = 59;
    secondsCropsEl.value = 59;
    hoursCropsEl.value--;
  }
};

startCropsEl.addEventListener("click", () => {
  hoursCropsEl.disabled = true;
  minutesCropsEl.disabled = true;
  secondsCropsEl.disabled = true;
  startCropsEl.disabled = true;

  startTimerCrops = setInterval(() => {
    timerCrops();
  }, 1000);
});

resetCropsEl.addEventListener("click", () => {
  hoursCropsEl.disabled = false;
  minutesCropsEl.disabled = false;
  secondsCropsEl.disabled = false;
  startCropsEl.disabled = false;
  hoursCropsEl.value = "0";
  minutesCropsEl.value = "0";
  secondsCropsEl.value = "0";
  clearInterval(startTimerCrops);
});

const startFruitsEl = document.getElementById("startFruits");
const resetFruitsEl = document.getElementById("resetFruits");
const audioFruits = new Audio("Fruits.mp3");

let hoursFruitsEl = document.getElementById("hoursFruits");
let minutesFruitsEl = document.getElementById("minutesFruits");
let secondsFruitsEl = document.getElementById("secondsFruits");

const timerFruits = () => {
  if (
    hoursFruitsEl.value == 0 &&
    minutesFruitsEl.value == 0 &&
    secondsFruitsEl.value == 0
  ) {
    hoursFruitsEl.value = "0";
    minutesFruitsEl.value = "0";
    secondsFruitsEl.value = "0";
    hoursFruitsEl.disabled = false;
    minutesFruitsEl.disabled = false;
    secondsFruitsEl.disabled = false;
    startFruitsEl.disabled = false;
    audioFruits.play();
    clearInterval(startTimerFruits);
  } else if (secondsFruitsEl.value != 0) {
    secondsFruitsEl.value--;
  } else if (minutesFruitsEl.value != 0 && secondsFruitsEl.value == 0) {
    secondsFruitsEl.value = 59;
    minutesFruitsEl.value--;
  } else if (hoursFruitsEl.value != 0 && minutesFruitsEl.value == 0) {
    minutesFruitsEl.value = 59;
    secondsFruitsEl.value = 59;
    hoursFruitsEl.value--;
  }
};

startFruitsEl.addEventListener("click", () => {
  hoursFruitsEl.disabled = true;
  minutesFruitsEl.disabled = true;
  secondsFruitsEl.disabled = true;
  startFruitsEl.disabled = true;

  startTimerFruits = setInterval(() => {
    timerFruits();
  }, 1000);
});

resetFruitsEl.addEventListener("click", () => {
  hoursFruitsEl.disabled = false;
  minutesFruitsEl.disabled = false;
  secondsFruitsEl.disabled = false;
  startFruitsEl.disabled = false;
  hoursFruitsEl.value = "0";
  minutesFruitsEl.value = "0";
  secondsFruitsEl.value = "0";
  clearInterval(startTimerFruits);
});

const startWoodEl = document.getElementById("startWood");
const resetWoodEl = document.getElementById("resetWood");
const audioWood = new Audio("Wood.mp3");

let hoursWoodEl = document.getElementById("hoursWood");
let minutesWoodEl = document.getElementById("minutesWood");
let secondsWoodEl = document.getElementById("secondsWood");

const timerWood = () => {
  if (
    hoursWoodEl.value == 0 &&
    minutesWoodEl.value == 0 &&
    secondsWoodEl.value == 0
  ) {
    hoursWoodEl.value = "0";
    minutesWoodEl.value = "0";
    secondsWoodEl.value = "0";
    hoursWoodEl.disabled = false;
    minutesWoodEl.disabled = false;
    secondsWoodEl.disabled = false;
    startWoodEl.disabled = false;
    audioWood.play();
    clearInterval(startTimerWood);
  } else if (secondsWoodEl.value != 0) {
    secondsWoodEl.value--;
  } else if (minutesWoodEl.value != 0 && secondsWoodEl.value == 0) {
    secondsWoodEl.value = 59;
    minutesWoodEl.value--;
  } else if (hoursWoodEl.value != 0 && minutesWoodEl.value == 0) {
    minutesWoodEl.value = 59;
    secondsWoodEl.value = 59;
    hoursWoodEl.value--;
  }
};

startWoodEl.addEventListener("click", () => {
  hoursWoodEl.disabled = true;
  minutesWoodEl.disabled = true;
  secondsWoodEl.disabled = true;
  startWoodEl.disabled = true;

  startTimerWood = setInterval(() => {
    timerWood();
  }, 1000);
});

resetWoodEl.addEventListener("click", () => {
  hoursWoodEl.disabled = false;
  minutesWoodEl.disabled = false;
  secondsWoodEl.disabled = false;
  startWoodEl.disabled = false;
  hoursWoodEl.value = "0";
  minutesWoodEl.value = "0";
  secondsWoodEl.value = "0";
  clearInterval(startTimerWood);
});

const startStoneEl = document.getElementById("startStone");
const resetStoneEl = document.getElementById("resetStone");
const audioStone = new Audio("Stone.mp3");

let hoursStoneEl = document.getElementById("hoursStone");
let minutesStoneEl = document.getElementById("minutesStone");
let secondsStoneEl = document.getElementById("secondsStone");

const timerStone = () => {
  if (
    hoursStoneEl.value == 0 &&
    minutesStoneEl.value == 0 &&
    secondsStoneEl.value == 0
  ) {
    hoursStoneEl.value = "0";
    minutesStoneEl.value = "0";
    secondsStoneEl.value = "0";
    hoursStoneEl.disabled = false;
    minutesStoneEl.disabled = false;
    secondsStoneEl.disabled = false;
    startStoneEl.disabled = false;
    audioStone.play();
    clearInterval(startTimerStone);
  } else if (secondsStoneEl.value != 0) {
    secondsStoneEl.value--;
  } else if (minutesStoneEl.value != 0 && secondsStoneEl.value == 0) {
    secondsStoneEl.value = 59;
    minutesStoneEl.value--;
  } else if (hoursStoneEl.value != 0 && minutesStoneEl.value == 0) {
    minutesStoneEl.value = 59;
    secondsStoneEl.value = 59;
    hoursStoneEl.value--;
  }
};

startStoneEl.addEventListener("click", () => {
  hoursStoneEl.disabled = true;
  minutesStoneEl.disabled = true;
  secondsStoneEl.disabled = true;
  startStoneEl.disabled = true;

  startTimerStone = setInterval(() => {
    timerStone();
  }, 1000);
});

resetStoneEl.addEventListener("click", () => {
  hoursStoneEl.disabled = false;
  minutesStoneEl.disabled = false;
  secondsStoneEl.disabled = false;
  startStoneEl.disabled = false;
  hoursStoneEl.value = "0";
  minutesStoneEl.value = "0";
  secondsStoneEl.value = "0";
  clearInterval(startTimerStone);
});

const startIronEl = document.getElementById("startIron");
const resetIronEl = document.getElementById("resetIron");
const audioIron = new Audio("Iron.mp3");

let hoursIronEl = document.getElementById("hoursIron");
let minutesIronEl = document.getElementById("minutesIron");
let secondsIronEl = document.getElementById("secondsIron");

const timerIron = () => {
  if (
    hoursIronEl.value == 0 &&
    minutesIronEl.value == 0 &&
    secondsIronEl.value == 0
  ) {
    hoursIronEl.value = "0";
    minutesIronEl.value = "0";
    secondsIronEl.value = "0";
    hoursIronEl.disabled = false;
    minutesIronEl.disabled = false;
    secondsIronEl.disabled = false;
    startIronEl.disabled = false;
    audioIron.play();
    clearInterval(startTimerIron);
  } else if (secondsIronEl.value != 0) {
    secondsIronEl.value--;
  } else if (minutesIronEl.value != 0 && secondsIronEl.value == 0) {
    secondsIronEl.value = 59;
    minutesIronEl.value--;
  } else if (hoursIronEl.value != 0 && minutesIronEl.value == 0) {
    minutesIronEl.value = 59;
    secondsIronEl.value = 59;
    hoursIronEl.value--;
  }
};

startIronEl.addEventListener("click", () => {
  hoursIronEl.disabled = true;
  minutesIronEl.disabled = true;
  secondsIronEl.disabled = true;
  startIronEl.disabled = true;

  startTimerIron = setInterval(() => {
    timerIron();
  }, 1000);
});

resetIronEl.addEventListener("click", () => {
  hoursIronEl.disabled = false;
  minutesIronEl.disabled = false;
  secondsIronEl.disabled = false;
  startIronEl.disabled = false;
  hoursIronEl.value = "0";
  minutesIronEl.value = "0";
  secondsIronEl.value = "0";
  clearInterval(startTimerIron);
});

const startGoldEl = document.getElementById("startGold");
const resetGoldEl = document.getElementById("resetGold");
const audioGold = new Audio("Gold.mp3");

let hoursGoldEl = document.getElementById("hoursGold");
let minutesGoldEl = document.getElementById("minutesGold");
let secondsGoldEl = document.getElementById("secondsGold");

const timerGold = () => {
  if (
    hoursGoldEl.value == 0 &&
    minutesGoldEl.value == 0 &&
    secondsGoldEl.value == 0
  ) {
    hoursGoldEl.value = "0";
    minutesGoldEl.value = "0";
    secondsGoldEl.value = "0";
    hoursGoldEl.disabled = false;
    minutesGoldEl.disabled = false;
    secondsGoldEl.disabled = false;
    startGoldEl.disabled = false;
    audioGold.play();
    clearInterval(startTimerGold);
  } else if (secondsGoldEl.value != 0) {
    secondsGoldEl.value--;
  } else if (minutesGoldEl.value != 0 && secondsGoldEl.value == 0) {
    secondsGoldEl.value = 59;
    minutesGoldEl.value--;
  } else if (hoursGoldEl.value != 0 && minutesGoldEl.value == 0) {
    minutesGoldEl.value = 59;
    secondsGoldEl.value = 59;
    hoursGoldEl.value--;
  }
};

startGoldEl.addEventListener("click", () => {
  hoursGoldEl.disabled = true;
  minutesGoldEl.disabled = true;
  secondsGoldEl.disabled = true;
  startGoldEl.disabled = true;

  startTimerGold = setInterval(() => {
    timerGold();
  }, 1000);
});

resetGoldEl.addEventListener("click", () => {
  hoursGoldEl.disabled = false;
  minutesGoldEl.disabled = false;
  secondsGoldEl.disabled = false;
  startGoldEl.disabled = false;
  hoursGoldEl.value = "0";
  minutesGoldEl.value = "0";
  secondsGoldEl.value = "0";
  clearInterval(startTimerGold);
});
