let t = 0;

function setup() {
  createCanvas(600, 400);
  colorMode(HSB);
  saveGif("assignment4.gif", 5); // 필요하면 주석 해제
}

function draw() {
  background(220);

  // ============================
  //  코트 배경 색 변화 (시간 기반)
  // ============================
  let bgHue = (frameCount * 0.2) % 360;
  fill(bgHue, 40, 95);
  rect(0, 0, 600, 400);

  fill((bgHue + 40) % 360, 60, 70);
  rect(0, 270, 600, 130);

  fill((bgHue + 80) % 360, 30, 90);
  quad(50, 280, 10, 390, 590, 390, 550, 280);

  // ============================
  //  코트 라인 (고정)
  // ============================
  noFill();
  stroke(0);
  arc(60, 335, 300, 100, radians(258), radians(135));
  arc(540, 335, 300, 100, radians(45), radians(282));
  circle(300, 335, 50);
  line(300, 280, 300, 390);
  ellipse(170, 335, 65, 50);
  ellipse(430, 335, 65, 50);
  line(175, 311, 165, 360);
  line(425, 311, 435, 360);
  line(175, 310, 44, 300);
  line(165, 360, 20, 365);
  line(425, 310, 556, 300);
  line(435, 360, 580, 365);

  // ============================
  //  골대
  // ============================
  stroke('#0D1B2A');
  strokeWeight(9);
  line(50, 330, 50, 200);
  line(550, 330, 550, 200);

  fill('#64B5F6');
  stroke(255);
  strokeWeight(4);
  quad(35, 165, 35, 229, 61, 171, 61, 111);
  quad(565, 165, 565, 229, 539, 171, 539, 111);

  noFill();
  strokeWeight(2);
  quad(44, 175, 44, 210, 52, 190, 52, 155);
  quad(556, 175, 556, 210, 548, 190, 548, 155);

  // 그물
  strokeWeight(1);
  stroke(255);
  line(60, 190, 61, 220);
  line(75, 188, 74, 220);
  line(67, 189, 67, 220);
  line(52, 200, 58, 225);
  line(86, 200, 80, 225);
  line(69, 210, 69, 230);
  line(60, 205, 63, 228);
  line(77, 210, 75, 228);

  line(540, 190, 539, 220);
  line(525, 188, 526, 220);
  line(533, 189, 533, 220);
  line(548, 200, 542, 225);
  line(514, 200, 520, 225);
  line(531, 210, 531, 230);
  line(540, 205, 537, 228);
  line(523, 210, 525, 228);

  strokeWeight(3);
  stroke('#FF6F00');
  ellipse(69, 198, 35, 25);
  ellipse(531, 198, 35, 25);

  // ============================
  //  ★ 움직이는 공 3개 ★
  // ============================

  // 공 1
  drawMovingBall(
    300 + sin(frameCount * 0.03) * 120,
    210 + cos(frameCount * 0.04) * 40,
    30 + sin(frameCount * 0.05) * 10,
    (frameCount * 2) % 360
  );

  // 공 2
  drawMovingBall(
    150 + sin(frameCount * 0.04) * 80,
    105 + cos(frameCount * 0.03) * 50,
    25 + sin(frameCount * 0.06) * 8,
    (frameCount * 3) % 360
  );

  // 공 3
  drawMovingBall(
    450 + sin(frameCount * 0.05) * 90,
    105 + cos(frameCount * 0.02) * 60,
    28 + sin(frameCount * 0.04) * 12,
    (frameCount * 4) % 360
  );
}

// ============================
//  공 그리는 함수
// ============================
function drawMovingBall(x, y, size, hueValue) {
  fill(hueValue, 80, 90);
  stroke(0);
  strokeWeight(1);

  circle(x, y, size);

  // 농구공 무늬
  line(x, y - size/2 + 5, x, y + size/2 - 5);
  arc(x - 7, y, size/2, size/2, radians(295), radians(65));
  arc(x + 7, y, size/2, size/2, radians(115), radians(245));
}
