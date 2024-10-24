function setup() {
  createCanvas(windowWidth, windowHeight);  
  background(255);  

 
  let numBackgroundCircles = 50;  
  for (let i = 0; i < numBackgroundCircles; i++) {
    let x = random(width);     
    let y = random(height);
    let maxRadius = random(20, 110);  
    drawConcentricCircles(x, y, maxRadius);
  }

 
  let bigCircleMaxRadius = width / 2;  
  drawConcentricCircles(width / 2, height / 2, bigCircleMaxRadius);  
  
  
  let numForegroundCircles = 25; 
  for (let i = 0; i < numForegroundCircles; i++) {
    let x = random(width);     
    let y = random(height);
    let maxRadius = random(20, 110);  
    drawConcentricCircles(x, y, maxRadius);
  }
}

function drawConcentricCircles(x, y, maxRadius) {
  let numCircles = int(random(5, 100));  
  for (let i = numCircles; i > 0; i--) {
    let radius = (i / numCircles) * maxRadius;

    
    let fillColor = color(random(255), random(255), random(255));
    let borderColor = color(0);  

    stroke(borderColor);         
    strokeWeight(0.3);           
    fill(fillColor);            
    ellipse(x, y, radius * 2, radius * 2);
  }
}
