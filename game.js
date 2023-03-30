class ItemKit {
  constructor(color, round, isPremium) {
    this.color = color;
    this.rounded = round;
    this.isPremium = isPremium;
  }

  implement(player) {
    if (this.isPremium === player.isPremium) {
      player.play.style.backgroundColor = this.color;
      player.play.style.borderRadius = `${this.rounded}px`;
    } else {
      alert("ini item premium!");
    }
  }
}

class Player {
  constructor(name, speed, isPremium) {
    this.play = document.querySelector(name);
    this.positionX = 0;
    this.positionY = 0;
    this.healthPoint = 0;
    this.exp = 0;
    this.speed = speed;
    this.isPremium = isPremium;
  }

  moveToLeft() {
    this.positionX -= this.speed;
    this.play.style.left = `${this.positionX}px`;
  }

  moveToRight() {
    this.positionX += this.speed;
    this.play.style.left = `${this.positionX}px`;
  }

  moveToUp() {
    this.positionY -= this.speed;
    this.play.style.top = `${this.positionY}px`;
  }

  moveToDown() {
    this.positionY += this.speed;
    this.play.style.top = `${this.positionY}px`;
  }
}

let kit1 = new ItemKit("red", 30, true);

let player = new Player(".player", 10, false);
kit1.implement(player);

document.querySelector("#up").addEventListener("click", (e) => {
  player.moveToUp();
});

document.querySelector("#down").addEventListener("click", (e) => {
  player.moveToDown();
});

document.querySelector("#left").addEventListener("click", (e) => {
  player.moveToLeft();
});

document.querySelector("#right").addEventListener("click", (e) => {
  player.moveToRight();
});
