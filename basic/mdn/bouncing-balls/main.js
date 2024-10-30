
/////////////// 设置画布 //////////////////////////

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

/////////////// 随机函数 //////////////////////////

// 生成随机数
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

// 生成随机颜色
function randomColor() {
  return (
    "rgb(" +
    random(0, 255) +
    ", " +
    random(0, 255) +
    ", " +
    random(0, 255) +
    ")"
  );
}

/////////////// 定义类 //////////////////////////

function Shape(x, y, velX, velY, exists) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.exists = exists;
}

function Ball(x, y, velX, velY, exists, color, size) {
  Shape.call(this, x, y, velX, velY, exists);
  this.color = color;
  this.size = size;
}

function EvilCircle(x, y, exists, size) {
  Shape.call(this, x, y, 20, 20, exists);
  this.size = size;
}

/////////////// Ball 的绘制方法 //////////////////////////

Ball.prototype.draw = function () {
  if (this.exists) {
    // 声明开始绘制
    ctx.beginPath();
    // 修改画笔颜色，默认是 #000
    ctx.fillStyle = this.color;
    // 绘制圆弧
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    // 声明结束绘制
    ctx.fill();
  }
}


Ball.prototype.update = function () {
  if (this.x + this.size >= width || this.x - this.size <= 0) {
    this.velX = -this.velX;
  }

  if (this.y + this.size >= height || this.y - this.size <= 0) {
    this.velY = -this.velY;
  }

  this.x += this.velX;
  this.y += this.velY;
}

Ball.prototype.collisionDetect = function () {
  if (!this.exists)
    return;

  for (let i = 0; i < balls.length; ++i) {
    if (this != balls[i] && balls[i].exists) {
      const dx = this.x - balls[i].x;
      const dy = this.y - balls[i].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < this.size + balls[i].size)
        balls[i].color = this.color = randomColor();
    }
  }
}

/////////////// EvilCircle 的绘制方法 ////////////////////

EvilCircle.prototype.draw = function () {
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#FFF";
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
  ctx.stroke();
}

EvilCircle.prototype.checkBounds = function () {
  if (this.x + this.size >= width || this.x - this.size <= 0) {
    this.x = width - this.x;
  }

  if (this.y + this.size >= height || this.y - this.size <= 0) {
    this.y = height - this.y;
  }
}

EvilCircle.prototype.setControls = function () {
  window.onkeydown = (e) => {
    switch (e.key) {
      case "s":
        this.y += this.velY;
        break;
      case "d":
        this.x += this.velX;
        break;
      case "w":
        this.y -= this.velY;
        break;
      case "a":
        this.x -= this.velX;
        break;
    }
  }
}

EvilCircle.prototype.collisionDetect = function () {
  for (let i = 0; i < balls.length; ++i) {
    if (balls[i].exists) {
      const dx = this.x - balls[i].x;
      const dy = this.y - balls[i].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < this.size + balls[i].size)
        balls[i].exists = false;
    }
  }
}

/////////////// 初始化 实例 //////////////////////////

let balls = [];
while (balls.length < 25) {
  let size = random(10, 20);
  let ball = new Ball(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    true,
    randomColor(),
    size,
  );
  balls.push(ball);
}

let evil = new EvilCircle(500, 500, true, 15);
evil.setControls();

/////////////// 绘制主循环 //////////////////////////

function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < balls.length; ++i) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
  }

  evil.draw();
  evil.checkBounds();
  evil.collisionDetect();

  requestAnimationFrame(loop);
}

loop();