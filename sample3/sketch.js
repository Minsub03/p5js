let xPos, xDir;
let yPos, yDir;
let diam;
let speed;

function setup() {
  createCanvas(400, 600);
  background(135, 206, 235);
  leftEyeX = 150;
  rightEyeX = 250;
  EyeY = 270;
  speed = 4;
  xPos = width / 2; // 공을 화면의 중심에서 출발
  xDir = speed;
  yPos = height / 2;
  yDir = speed;
  diam = 50;
}

function draw() {
  background(135, 206, 235);
  if (mouseIsPressed) {
    let r = random(255);
  let g = random(255);
  let b = random(255);

  background(r, g, b);
  }
  // 유니폼
  fill(26, 58, 110); stroke(15, 37, 80); strokeWeight(2);
  beginShape();
  vertex(30,600); vertex(30,490); vertex(100,460); vertex(155,468);
  vertex(245,468); vertex(300,460); vertex(370,490); vertex(370,600);
  endShape(CLOSE);
  fill(255); noStroke();
  textSize(60); textAlign(CENTER, CENTER); textStyle(BOLD);
  text("30", 200, 555);

  // 칼라
  fill(255, 203, 164); noStroke();
  triangle(165,468, 235,468, 200,498);

  // 목
  fill(255, 203, 164); noStroke();
  rect(178, 400, 44, 70, 8);

  // 귀
  fill(255, 203, 164); stroke(210, 145, 90); strokeWeight(1.5);
  ellipse(50, 290, 40, 100);
  ellipse(350, 290, 40, 100);
  ellipse(60, 290, 30, 60);
  ellipse(340, 290, 30, 60);

  // 얼굴
  fill(255, 203, 164); stroke(210, 145, 90); strokeWeight(2);
  beginShape();
  vertex(50, 230); vertex(350, 230); vertex(310, 420); vertex(240, 450); 
  vertex(160, 450); vertex(90, 420);
  endShape(CLOSE);

  // 머리
  fill(26, 18, 14); noStroke();
  arc(200, 230, 320, 360, PI, TWO_PI);

  // 눈썹
  stroke(26, 18, 14); strokeWeight(3.5);
  line(80, 235, 181, 240);
  line(320, 235, 219, 240);

  // 눈
  fill(255); stroke(68,68,68); strokeWeight(1.2);
  ellipse(130, 270, 100, 30);
  ellipse(270, 270, 100, 30);
  fill(26, 16, 16); noStroke();
  ellipse(leftEyeX, EyeY, 17, 19);
  ellipse(rightEyeX, EyeY, 17, 19);
  fill(255); noStroke();
  ellipse(leftEyeX + 4, EyeY, 5, 5);
  ellipse(rightEyeX - 4, EyeY, 5, 5);
  leftEyeX = constrain(leftEyeX, 90, 170);
  rightEyeX = constrain(rightEyeX, 230, 310);
  EyeY = constrain(EyeY, 265, 275);

  // 안경
  noFill(); stroke(17,17,17); strokeWeight(3.5);
  rect(70, 250, 120, 50, 6);
  rect(207, 250, 120, 50, 6);
  strokeWeight(3); line(50, 246, 70, 264);
  strokeWeight(2.5); line(350, 246, 330, 264);
  line(190, 267, 206, 267);

  // 코
  stroke(200, 128, 80); strokeWeight(1.8); noFill();
  line(200, 300, 193, 350);
  line(200, 300, 207, 350);
  arc(200, 350, 20, 12, PI, TWO_PI);

  // 입
  stroke(176, 85, 64); strokeWeight(2.2);
  arc(200, 400, 110, 22, radians(0), radians(180));

  // 볼 홍조
  noStroke(); fill(255, 144, 112, 55);
  ellipse(140, 320, 70, 20);
  ellipse(260, 320, 70, 20);
  

  // ball drawing and movement
  xPos = xPos + xDir;
  yPos = yPos + yDir;

  // ball bouncing 
  if ( xPos - diam/2 < 0) xDir = xDir * -1; 
  if ( xPos + diam/2 > width) xDir *=  -1;

  if ( yPos - diam/2 < 0) yDir *= -1; 
  if ( yPos + diam/2 > height) yDir *=  -1;
  
  // 농구공
  fill('#F57C00');
  stroke(0);
  strokeWeight(1);
  circle(xPos, yPos, 30); 
  line(xPos, yPos - 15, xPos, yPos + 15);
  arc(xPos - 15, yPos, 20, 20, radians(295), radians(65));
  arc(xPos + 15, yPos, 20, 20, radians(115), radians(245));
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    leftEyeX -= 10;
    rightEyeX -= 10;
  } else if (keyCode === RIGHT_ARROW) {
    leftEyeX += 10;
    rightEyeX += 10;
  } else if (keyCode === UP_ARROW) {
    EyeY -= 10;
  } else if (keyCode === DOWN_ARROW) {
    EyeY += 10;
  }
  
  if (key === 's') {
    saveGif('20221504_3', 15)
  }
}