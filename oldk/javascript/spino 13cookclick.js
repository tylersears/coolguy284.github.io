/**

Now 1.2!

1.2: 
- Added more news! 
- News now changes when you buy different buildings


1.1:
- fixed NaN
- fixed "0 million" problem
- fixed textAlign
- fixed cursor price
- added developer mode (if Cookies baked is more than 20,000,000 then activate developer mode)
**/

var developer = false;

/**
THANKS FOR VOTING! 
316 votes! WOW!


"Cool!" - Spencer Cultice
"I have been playing for over an hour and I can't stop!" - ☢Now3852☢
'This is nearly as awesome as the online Cookie Clicker!" - The Gigabyte Resource


*/
/**
// TOO BUSY TO UPDATE LEADERBOARD, SORRY
// TOO BUSY TO UPDATE LEADERBOARD, SORRY
// TOO BUSY TO UPDATE LEADERBOARD, SORRY
// TOO BUSY TO UPDATE LEADERBOARD, SORRY
// TOO BUSY TO UPDATE LEADERBOARD, SORRY
// TOO BUSY TO UPDATE LEADERBOARD, SORRY
// TOO BUSY TO UPDATE LEADERBOARD, SORRY
// TOO BUSY TO UPDATE LEADERBOARD, SORRY
**/
/****** HIGHSCORES (SPIN-OFF FOR PROOF PLEASE)  ****************************
 * 1. 5534.0 cps - Luke Stevenson
 * 2. 4000.0 cps - 18WangH
 * 3. 3400.0 cps - ☢Now3852☢
 * 4. 3384.0 cps - J-777(Jakey2122/F-777)
 * 5. 3151.6 cps - gsuchirreddy 
 * 6. 3077.0 cps - Winston 
 * 7. 3251.6 cps - DomDoms 
 * 8. 2562.0 cps - Joe Tinlin 
 * 
/*

*/

var cookies=0;
var barY=35;
var cps=0;
var multi=1;
var upgradeBarState = "closed";
var upgradeBarMouseCount = 0;
var upgradeBarWaitCount = 0;
var upgradeBarPos = 80;
var cnews = 0;
var newsCount = 0;
var news = [];
var n = [];
var achievementName = ["Fledging Bakery", "Affluent Bakery", "Double Click"];
var achievementGet = [false, false];

var cursors = 0;
var cursorPrice = 10;

var grandmas = 0;
var grandmaPrice = 100;

var farms = 0;
var farmPrice = 500;

var factories = 0;
var factoryPrice = 3000;

var mines = 0;
var minePrice = 10000;

var frame = 0;
var prettyCookies;
var totalCookies=0;
frameRate(100);

var beautify = function(cookies){
    prettyCookies = cookies;
    // 1, 000, 000
    
    if(prettyCookies<1000000){
        return (Math.round(prettyCookies));
    }
    // 1, 000, 000, 000
    else if(prettyCookies<Math.pow(10, 9)){
        return (Math.round(prettyCookies/Math.pow(10, 6)*100)/100)+" million";
    }
    // 1, 000, 000, 000, 000
    else if(prettyCookies<Math.pow(10, 12)){
        return Math.round(prettyCookies/Math.pow(10, 9)*100)/100+" billion";
    }
    else if(prettyCookies<Math.pow(10, 15)){
        return Math.round(prettyCookies/Math.pow(10, 12)*100)/100+" trillion";
    }
    else {
        text(prettyCookies, 18, 30);
    }
    };


var notify = function(name){this.name=name;this.timer=0;};
    notify.prototype.update = function(){this.timer++;};
    notify.prototype.display = function(pos){
        if(this.timer<200){
        text(this.name, 200, 400-(pos*20));
        }
        
   };


draw= function() {
    while(news.length>0){news.pop();}
    //Your pets would be very happy to try your cookies
    if(totalCookies<=10){news.push("You feel like baking some \ncookies.");}
    else if(totalCookies<=20){news.push("Your first batch ends up\n in the trash. It is \nsampled by a raccoon.");}      
    else if(totalCookies<=30){news.push("Your pets would be very \nhappy to try your cookies");}  
    else if(totalCookies<=50){news.push("Your family agrees to \ntry your cookies.");}
    if(grandmas>0){news.push("Cookie manufacturer \nrecruits elderly workforce");}
    if(farms>0){news.push("Scientists warn against \ngenetically engineered \ncookie plants");}
    if(farms>0){news.push("New underground dimension \ndiscovered! Found to house \n\"peculiar, chocolatety \nbeings\" ");}
    
    if (developer){cps+=1;cps*=1.00001;}
   
    
    
    // achievements (WIP)
    if(totalCookies>=1000){
achievementGet[0] = true;
notify(achievementName[0]);
}
    if(totalCookies>=10000){
achievementGet[1] = true;
notify(achievementName[1]);
}
    if(cursors>=2&&!achievementGet[2]){
achievementGet[2] = true;
notify(achievementName[2]); 
n.push(new notify("Double-click"));
}

    // adds 1/100 of cps every 1/100 second for smooth addition
    cookies+=(cps/100);
    totalCookies+=(cps/100);

    strokeWeight(10);
    frame++;
    background(80, 113, 201);
    line(130, 0, 130, 400);
    line(270, 0, 270, 400);
    textSize(25);
    fill(255, 255, 255);
    text("Store", 308, 23);
    text("Stats", 181, 104);

textSize(12);
text("Cookies baked:\n"+(beautify(totalCookies)), 143, 132);
text("Cookies in bank:\n"+(beautify(cookies)), 143, 170);
text("Cursors owned: "+cursors, 143, 206);
text("Grandmas owned: "+grandmas, 143, 224);
text("Farms owned: "+farms, 143, 244);
text("Factories owned: "+factories, 143, 262);
text("Mines owned: "+mines, 143, 280);
// rounding cookies
textSize(15);
textAlign(CENTER, CENTER);
text((beautify(cookies))+" cookies", 64, 25);
// cookies per second
textSize(12);
if(isNaN(beautify(cps*100)/100)){text(beautify(cps)+" Cps", 65, 41);}
else{text(beautify(cps*100)/100+" Cps", 65, 41);}
textAlign(LEFT, UP);
// dividers
fill(161, 91, 61);
rect(270, 35, 129, 8);
rect(270, upgradeBarPos, 129, 8);
rect(130, 66, 140, 8);
rect(270, 0, 8, 399);
rect(130, 0, 8, 399);
// divider shadows
fill(128, 79, 79);
rect(135, 0, 3, 399);
rect(275, 0, 3, 399);
rect(130+5, 71, 135, 3);
rect(275, 40, 129, 3);
rect(275, upgradeBarPos+5, 129, 3);
ellipse(67.5, 102.5, 105, 105);
//cookie
fill(161, 91, 61);
ellipse(65, 100, 100, 100);
fill(82, 48, 20);
ellipse(65, 68, 20, 20);
ellipse(93, 111, 20, 20);
ellipse(92, 78, 20, 20);
ellipse(36, 101, 20, 20);
ellipse(53, 126, 20, 20);
point(65, 100);

// upgrade bar code
if(mouseX>270&&mouseY>30&&mouseY<80&&upgradeBarState==="closed"){
upgradeBarMouseCount+=1;
}
else{
upgradeBarMouseCount=0;
}
if(upgradeBarMouseCount>=10&&upgradeBarState==="closed"){
    upgradeBarState="opening";
}
if(upgradeBarState==="opening"){
    upgradeBarPos+=1.5;
}
if(upgradeBarState==="opening"&&upgradeBarPos>=130){
    upgradeBarPos=130;
}
if(upgradeBarPos>=130&&!(mouseX>270&&mouseY>30&&mouseY<130)){
upgradeBarPos=130;
upgradeBarState="open";
}
if(upgradeBarState==="open"){
    upgradeBarWaitCount++;
}
if(upgradeBarWaitCount>=20){
    upgradeBarState="closing";
    upgradeBarWaitCount=0;
}
if(upgradeBarState==="closing"){
    upgradeBarPos-=1.5;
}
if(upgradeBarPos<=80){
    upgradeBarPos=80;
    upgradeBarState="closed";
}

var button = function(x, y, width, height, name, number, price){
    fill(158, 158, 158);
    rect(x+5, y+5, width-10, height-10);
    noStroke();
    fill(128, 125, 128);
    rect(x, y, 5, height);    
    fill(125, 119, 125);
    rect(x+width-5, y, 5, height);  
    fill(145, 136, 145);
    rect(x, y, width, 5);   
    fill(115, 114, 115);
    rect(x, y+height-5, width, 5);
    fill(255, 255, 255);
    textSize(14);
    text(name, x+12,y+20);
    fill(30, 148, 39);
    textSize(13);
    text(beautify(price), x+7, y+37);
    textSize(20);
    fill(102, 98, 102);
    text(number, x+80, y+28);
};
button(280, upgradeBarPos+10, 117, 44, "Cursor", cursors, cursorPrice);
button(280, upgradeBarPos+57, 117, 44, "Grandma", grandmas, grandmaPrice);
button(280, upgradeBarPos+106, 117, 44, "Farm", farms, farmPrice);
button(280, upgradeBarPos+156, 117, 44, "Factory", factories, factoryPrice);
button(280, upgradeBarPos+206, 117, 44, "Mine", mines, minePrice);


mouseClicked=function(){
    if(mouseX>15&&mouseX<115&&mouseY>50&&mouseY<150){
        cookies+=1*multi;
        totalCookies+=1*multi;
        
    }
    if(mouseX>280&&mouseX<280+117&&mouseY>upgradeBarPos+10&&mouseY<upgradeBarPos+10+40&&cookies>=cursorPrice){
        cursors++;
        cps+=0.1;
        cookies-=cursorPrice;
        cursorPrice+=0;
    }
    if(mouseX>280&&mouseX<280+117&&mouseY>upgradeBarPos+57&&mouseY<upgradeBarPos+57+44&&cookies>=grandmaPrice){
        grandmas++;
        cps+=0.5;
        cookies-=grandmaPrice;
        grandmaPrice+=0;
    }
    if(mouseX>280&&mouseX<280+117&&mouseY>upgradeBarPos+106&&mouseY<upgradeBarPos+106+40&&cookies>=farmPrice){
        farms++;
        cps+=10;
        cookies-=farmPrice;
        farmPrice+=0;
    }    
    if(mouseX>280&&mouseX<280+117&&mouseY>upgradeBarPos+156&&mouseY<upgradeBarPos+156+40&&cookies>=factoryPrice){
        factories++;
        cps+=40;
        cookies-=factoryPrice;
        factoryPrice+=0;
    }
     if(mouseX>280&&mouseX<280+117&&mouseY>upgradeBarPos+206&&mouseY<upgradeBarPos+206+40&&cookies>=minePrice){
        mines++;
        cps+=100;
        cookies-=minePrice;
        minePrice+=0;
    }
};

if(cookies > totalCookies || developer && totalCookies < 20000000){
    fill(255, 255, 255);
    rect(0, 0, 400, 400);
    fill(255, 0, 0);
    textSize(40);
text("CHEATED COOKIES \n TASTE AWFUL", 21, 200);
text("CHEATED COOKIES \n TASTE AWFUL", 21, 87);
text("CHEATED COOKIES \n TASTE AWFUL", 21, 163);
text("CHEATED COOKIES \n TASTE AWFUL", 21, 241);
text("CHEATED COOKIES \n TASTE AWFUL", 21, 315);
}
    newsCount++;
    if(newsCount>=200){newsCount=0;cnews=news[round(random(0, news.length-1))];}
   // text(newsCount, 200, 300);
    fill(255, 255, 255);
    textSize(10);
    text(cnews, 140, 15);
    for (var i=0; i<n.length; i++){
        n[i].update();
        n[i].display(i);
        if(n[i].timer>200){//remove(n[i]);
        }
    }
    if(totalCookies<=10){cnews=news[0];}
  //  text(news[cnews], 160, 15);
   if (totalCookies > 20000000) {developer = false; text("activated devoloper mode", 10, 200);textSize(25); text("YOU WON!",10,250);}
};