noStroke();
/* the design is used to minimise lag, because if it did the whole page in one tick, there would be a runtime errror.
*/
var xmd = 0;//mimimum x
var ymd = 0;//minimum y
var xmnd = 400;//maximum x
var ymnd = 400;//maximum y
var px = 1;//size of pixel in x- direction
var py = 1;//size of pixel in y- direction
var crm = 0;//minimum red in random generation
var cgm = 0;//minimum green in random generation
var cbm = 0;//minimum blue in random generation
var crmn = 255;//maximum red in random generation
var cgmn = 255;//maximum green in random generation
var cbmn = 255;//maximum blue in random generation
var valcheck = function() {
if (xmd<0) {xmd=0;}
if (xmd>400) {xmd=400;}
if (xmd>xmnd) {xmd=xmnd;}
if (xmnd<0) {xmnd=0;}
if (xmnd>400) {xmnd=400;}
if (xmnd<xmd) {xmnd=xmd;}
if (ymd<0) {ymd=0;}
if (ymd>400) {ymd=400;}
if (ymd>xmnd) {ymd=ymnd;}
if (ymnd<0) {ymnd=0;}
if (ymnd>400) {ymnd=400;}
if (ymnd<xmd) {ymnd=ymd;}
if (px<1) {px=1;}
if (px>400) {px=400;}
if (py<1) {py=1;}
if (py>400) {py=400;}
if (crm<0) {crm=0;}
if (crm>400) {crm=400;}
if (crm>crmn) {crm=crmn;}
if (cgm<0) {cgm=0;}
if (cgm>400) {cgm=400;}
if (cgm>crmn) {cgm=cgmn;}
if (cbm<0) {cbm=0;}
if (cbm>400) {cbm=400;}
if (cbm>crmn) {cbm=cbmn;}
if (crmn<0) {crmn=0;}
if (crmn>400) {crmn=400;}
if (crmn<crm) {crmn=crm;}
if (cgmn<0) {cgmn=0;}
if (cgmn>400) {cgmn=400;}
if (cgmn<cgm) {cgmn=cgm;}
if (cbmn<0) {cbmn=0;}
if (cbmn>400) {cbmn=400;}
if (cbmn<cbm) {cbmn=cbm;}
};
valcheck();
var draw = function() {
for (var x = 0;x<1;x++) {
for (var y = ymd;y<(ymnd/py);y++) {
if ((x+xmd+(frameCount)-10)*px<xmnd) {
fill(lerpColor(lerpColor(color(255,0,0),color(0, 255, 0),y/400),color(0, 0, 255),(x+xmd+(frameCount)-10)/400));
rect((x+xmd+(frameCount)-10)*px, y*py, px, py);
}
}
}
};