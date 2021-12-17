goButton.addEventListener("click", (e) => {
  e.preventDefault();
  decision();
});

if (window.innerWidth <= 1000) {
  let responseArea = document.getElementById("response");
  responseArea.textContent = ("Should you do the thing?");
}

const randomInArray = (arr) => {
  const rand = Math.random();
  return arr[Math.floor(arr.length * rand)];
};

const randomTime = (maxDurationInSeconds = 1) => {
  return Math.floor(Math.random() * maxDurationInSeconds * 1000);
};


const renderKey = (key) => {
  const time = randomTime();
  const keyset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`~!@#$%^&*()[]{}\|,./<>?;'-=_+:";
  let outputKey = document.createElement("span");
  outputKey.textContent = key;
  outputKey.classList.add("big")
  output.appendChild(outputKey);
  const flickerKey = setInterval(() => {
    outputKey.textContent = randomInArray(keyset);
  }, 50);
  setTimeout(clearInterval, time, flickerKey);
  setTimeout(() => {
    outputKey.textContent = key;
  }, time + 50);
};

const setColor = (yesOrNo) => {
  console.debug("setColor run")
  output.classList.add(yesOrNo);
};

const decision = () => {
  console.debug("decision run")
  clearInterval(currentCounter);
  output.classList = "";
  output.innerHTML = "";
  const yesOrNo = randomInArray(["yes", "no"]);
  let selectedOutput = randomInArray(answers[yesOrNo]);
  if (selectedOutput.length < 10) {
    selectedOutput = "   " + selectedOutput + "   ";
  }

  [...selectedOutput].forEach((letter, index, arr) => {
    renderKey(letter);
  });

  currentCounter = setTimeout(setColor, 1100, yesOrNo);
};

let currentCounter = 0;