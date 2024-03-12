const numStars = 1000;
const starField = document.querySelector(".star-field");
const totalAnimationDuration = 10;

for (let i = 0; i < numStars; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;

  star.style.opacity = Math.random();

  if (Math.random() < 0.1) {
    star.classList.add("colored-star");
    const colors = ["yellow", "blue", "green", "purple", "pink"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    star.style.backgroundColor = randomColor;
  }

  star.style.animationDuration = `${Math.random() * 3 + 1}s`;
  star.style.animationDelay = `${Math.random() * totalAnimationDuration}s`;
  starField.appendChild(star);
}

let frameNumber = 0;
let opacity = 0;
let currentText;

function draw() {
  if (frameNumber < 300) {
    if (currentText) {
      starField.removeChild(currentText);
    }
    currentText = document.createElement("div");
    currentText.style.font = "30px Times New Roman";
    currentText.style.color = `rgba(255, 255, 255, ${opacity})`;
    currentText.style.textAlign = `center`;
    currentText.style.position = "absolute";
    currentText.style.top = "50%";
    currentText.style.left = "50%";
    currentText.style.transform = "translate(-50%, -50%)";
    currentText.textContent = "Every day I cannot believe how lucky I am";
    starField.appendChild(currentText);
    opacity += 0.01;
  } else if (frameNumber >= 300 && frameNumber < 600) {
    opacity -= 0.01;
  } else if (frameNumber === 600) {
    opacity = 0;
  } else if (frameNumber > 600 && frameNumber < 900) {
    if (currentText) {
      starField.removeChild(currentText);
    }
    currentText = document.createElement("div");
    currentText.style.font = "30px Times New Roman";
    currentText.style.color = `rgba(255, 255, 255, ${opacity})`;
    currentText.style.textAlign = `center`;
    currentText.style.position = "absolute";
    currentText.style.top = "50%";
    currentText.style.left = "50%";
    currentText.style.transform = "translate(-50%, -50%)";
    currentText.textContent =
      "Amongst trillions and trillions of stars, over billions of years ...";
    starField.appendChild(currentText);
    opacity += 0.01;
  } else if (frameNumber >= 900 && frameNumber < 1200) {
    opacity -= 0.01;
  } else if (frameNumber >= 1200 && frameNumber < 1500) {
    if (currentText) {
      starField.removeChild(currentText);
    }
    currentText = document.createElement("div");
    currentText.style.font = "30px Times New Roman";
    currentText.style.color = `rgba(255, 255, 255, ${opacity})`;
    currentText.style.textAlign = `center`;
    currentText.style.position = "absolute";
    currentText.style.top = "50%";
    currentText.style.left = "50%";
    currentText.style.transform = "translate(-50%, -50%)";
    currentText.textContent =
      "To be alive, and to get to spend this time with you,";
    starField.appendChild(currentText);
    opacity += 0.01;
  } else if (frameNumber >= 1500 && frameNumber < 1800) {
    opacity -= 0.01;
  } else if (frameNumber >= 1800 && frameNumber < 2100) {
    if (currentText) {
      starField.removeChild(currentText);
    }
    currentText = document.createElement("div");
    currentText.style.font = "30px Times New Roman";
    currentText.style.color = `rgba(255, 255, 255, ${opacity})`;
    currentText.style.textAlign = `center`;
    currentText.style.position = "absolute";
    currentText.style.top = "50%";
    currentText.style.left = "50%";
    currentText.style.transform = "translate(-50%, -50%)";
    currentText.textContent = "Is so incredibly, unfathomably unlikely";
    starField.appendChild(currentText);
    opacity += 0.01;
  } else if (frameNumber >= 2100 && frameNumber < 2400) {
    opacity -= 0.01;
  } else if (frameNumber >= 2400 && frameNumber < 2700) {
    if (currentText) {
      starField.removeChild(currentText);
    }
    currentText = document.createElement("div");
    currentText.style.font = "30px Times New Roman";
    currentText.style.color = `rgba(255, 255, 255, ${opacity})`;
    currentText.style.textAlign = `center`;
    currentText.style.position = "absolute";
    currentText.style.top = "50%";
    currentText.style.left = "50%";
    currentText.style.transform = "translate(-50%, -50%)";
    currentText.textContent =
      "And yet here I am to get the impossible chance to get to know you";
    starField.appendChild(currentText);
    opacity += 0.01;
  } else if (frameNumber >= 2700 && frameNumber < 3000) {
    opacity -= 0.01;
  } else if (frameNumber >= 3000 && frameNumber < 3300) {
    if (currentText) {
      starField.removeChild(currentText);
    }
    currentText = document.createElement("div");
    currentText.style.font = "30px Times New Roman";
    currentText.style.color = `rgba(255, 255, 255, ${opacity})`;
    currentText.style.textAlign = `center`;
    currentText.style.position = "absolute";
    currentText.style.top = "50%";
    currentText.style.left = "50%";
    currentText.style.transform = "translate(-50%, -50%)";
    currentText.textContent =
      "I cherish you immensely, beyond the bounds of time and space,";
    starField.appendChild(currentText);
    opacity += 0.01;
  } else if (frameNumber >= 3300 && frameNumber < 3600) {
    opacity -= 0.01;
  } else if (frameNumber >= 3600 && frameNumber < 3900) {
    if (currentText) {
      starField.removeChild(currentText);
    }
    currentText = document.createElement("div");
    currentText.style.font = "30px Times New Roman";
    currentText.style.color = `rgba(255, 255, 255, ${opacity})`;
    currentText.style.textAlign = `center`;
    currentText.style.position = "absolute";
    currentText.style.top = "50%";
    currentText.style.left = "50%";
    currentText.style.transform = "translate(-50%, -50%)";
    currentText.textContent = "We'll make sure to make our time last forever";
    starField.appendChild(currentText);
    opacity += 0.01;
  } else if (frameNumber >= 3900 && frameNumber < 4700) {
    opacity -= 0.01;
  } else if (frameNumber >= 4700 && frameNumber < 99999) {
    if (currentText) {
      starField.removeChild(currentText);
    }
    currentText = document.createElement("div");
    currentText.style.font = "30px Times New Roman";
    currentText.style.color = `rgba(255, 255, 255, 1)`;
    currentText.style.textAlign = `center`;
    currentText.style.position = "absolute";
    currentText.style.top = "50%";
    currentText.style.left = "50%";
    currentText.style.transform = "translate(-50%, -50%)";
    currentText.textContent = "Happy Valentines Day Davie Wavie <3";
    starField.appendChild(currentText);
  }

  if (frameNumber < 99999) {
    frameNumber++;
  }
  window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);
