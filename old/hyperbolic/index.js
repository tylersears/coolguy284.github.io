var SetStart;
var SetEnd;
var Reset;
var Current;
var sketchProc = function(processingInstance) {
  with (processingInstance) {
//begin processingjs
var width = 600;
var height = 600;
size(width, height, P2D);
angleMode = 'rad';
var e = 2.718281828;
var sinh = function(x) {
  return (pow(e, x) - pow(e, -x)) / 2;
};
var cosh = function(x) {
  return (pow(e, x) + pow(e, -x)) / 2;
};
var tanh = function(x) {
  return (pow(e, x) - pow(e, -x)) / (pow(e, x) + pow(e, -x));
};
var asinh = function(x) {
  return log(x + sqrt(sq(x) + 1));
};
var acosh = function(x) {
  return log(x + sqrt(sq(x) - 1));
};
var atanh = function(x) {
  return 0.5 * log((1 + x) / (1 - x));
};
var lorenz = function() {
  
};
var uct = function(px, py) {
  var d = dist(0, 0, px, py);
  var a = atan2(px, -py) - HALF_PI;
  d = tanh(asinh(d));
  return [cos(a) * d, sin(a) * d];
};
var uuct = function(px, py) {
  var d = dist(0, 0, px, py);
  var a = atan2(px, -py) - HALF_PI;
  d = sinh(atanh(d));
  return [cos(a) * d, sin(a) * d];
};
var uct2 = function(px, py) {
  var d = dist(0, 0, px, py);
  var a = atan2(px, -py) - HALF_PI;
  d = asinh(d);
  return [cos(a) * d, sin(a) * d];
};
var uuct2 = function(px, py) {
  var d = dist(0, 0, px, py);
  var a = atan2(px, -py) - HALF_PI;
  d = sinh(d);
  return [cos(a) * d, sin(a) * d];
};
var mc = 0.25;
var mode = 1;
var space = 1;
var grid = mode;
var pers = 1;
var ogf = mc;
var gf = ogf * 200;
var ge = [-20, -20, 20, 20];
var px = 0;
var py = 0;
var rpx = 0;
var rpy = 0;
keyPressed = function() {
    //println(key);
    //println(keyCode);
    var mx = 0;
    var my = 0;
    if (keyCode === 87) {
        my += mc;
    }
    if (keyCode === 83) {
        my -= mc;
    }
    if (keyCode === 68) {
        mx += mc;
    }
    if (keyCode === 65) {
        mx -= mc;
    }
    if (space == 1) {
      var p = uct2(px, py);
      px = p[0];
      py = p[1];
    }
    px += mx;
    py += my;
    if (space == 1) {
      p = uuct2(px, py);
      px = p[0];
      py = p[1];
    }
};
textAlign(LEFT, TOP);
textFont(createFont('consolas', 12));
background(0);
draw = function() {
    var r = uct(px, py);
    rpx = r[0];
    rpy = r[1];
    fill(0);
    background(0);
    //rect(0, 400, 600, 200);
    pushMatrix();
    translate(300, 200);
    scale(1, -1);
    stroke(255);
    noFill();
    ellipse(0, 0, 400, 400);
    noStroke();
    fill(255, 0, 0);
    if (grid === 0) {
        for (var i = ge[0]; i <= ge[2]; i ++) {
            for (var j = ge[1]; j <= ge[3]; j ++) {
                ellipse(i*gf-px*pers, j*gf-py*pers, 5, 5);
            }
        }
    } else if (grid === 1) {
        for (var i = ge[0]; i <= ge[2]; i ++) {
            for (var j = ge[1]; j <= ge[3]; j ++) {
                var p;
                if (space == 1) {
                  p = uuct2(i*ogf-px*pers, j*ogf-py*pers);
                  p = uct(p[0], p[1]);
                } else if (space == 0) {
                  p = uct(i*ogf-px*pers, j*ogf-py*pers);
                }
                ellipse(p[0]*200, p[1]*200, 5, 5);
            }
        }
    }
    fill(255);
    if (pers === 0) {
    if (mode === 0) {
        ellipse(px * 200, py * 200, 20, 20);
    } else if (mode === 1) {
        ellipse(rpx * 200, rpy * 200, 20, 20);
    }
    } else if (pers === 1) {
        ellipse(0, 0, 20, 20);
    }
    popMatrix();
    text('Position:\nX: ' + px + '\nY: ' + py, 0, 400);
    text('Rel Position:\nX: ' + rpx + '\nY: ' + rpy, 0, 450);
};
//end processingjs
  }
};
var canvas = document.getElementById("mycanvas"); 
var processingInstance = new Processing(canvas, sketchProc);