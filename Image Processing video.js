var video;

var vScale = 5;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
}

function draw() {
  background(51);
  
  
  video.loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x + 1 + (y * video.width)) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      var bright = (r + g + b) / 3;
      
      if(bright > 90){
        
        var w = map(255, 0, 255, 0, vScale);
      noStroke();
      fill(255);
      rectMode(CENTER);
      rect(x * vScale, y * vScale, w, w);
        
      } else {
        
        var w = map(0, 0, 255, 0, vScale);
      noStroke();
      fill(255);
      rectMode(CENTER);
      rect(x * vScale, y * vScale, w, w);
        
      }
      
      
    }
  }

}
