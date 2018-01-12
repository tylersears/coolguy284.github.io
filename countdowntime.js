var id, cd, dif, sd;
date = new Date();
id = new Date(2017, 11, 7, 0, 0, 0);
cd = new Date(date.getFullYear(), date.getMonth()+1, date.getDate(), 0, 0, 0);
dif = Math.round(Math.abs((id.getTime() - cd.getTime())/86400000));
sd = 327-dif*3;
UpdDate = function() {
  dl = {
    'sf': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 0, 0, 0),
    'st': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 14, 23, sd, (sd - Math.floor(sd)) * 1000),
    'scf': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 0, 0, 0),
    'sct': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 14, 23, 0, 0),
    's1f': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 0, 0, 0),
    's1t': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 9, 13, 0, 0),
    's3f': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 9, 13, 0, 0),
    's3t': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 9, 55, 0, 0),
    's4f': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 9, 55, 0, 0),
    's4t': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 10, 45, 0, 0),
    's5f': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 10, 45, 0, 0),
    's5t': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 11, 10, 0, 0),
    's6f': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 11, 10, 0, 0),
    's6t': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 11, 50, 0, 0),
    's7f': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 11, 50, 0, 0),
    's7t': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 45, 0, 0),
    's8f': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 45, 0, 0),
    's8t': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 14, 23, sd, (sd - Math.floor(sd)) * 1000),
    'muf': new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), 0, 0),
    'mut': new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes()+1, 0, 0),
    'hf': new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), 0, 0, 0),
    'ht': new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours()+1, 0, 0, 0),
    'df': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0),
    'dt': new Date(date.getFullYear(), date.getMonth(), date.getDate()+1, 0, 0, 0, 0),
    'wf': new Date(),
    'wt': new Date(),
    'mf': new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0),
    'mt': new Date(date.getFullYear(), date.getMonth()+1, 1, 0, 0, 0, 0),
    'yf': new Date(date.getFullYear(), 0, 1, 0, 0, 0, 0),
    'yt': new Date(date.getFullYear()+1, 0, 1, 0, 0, 04, 0),
    'def': new Date(Math.floor(date.getFullYear() / 10) * 10, 0, 1, 0, 0, 0, 0),
    'det': new Date(Math.ceil(date.getFullYear() / 10) * 10, 0, 1, 0, 0, 0, 0),
    'cf': new Date(Math.floor(date.getFullYear() / 100) * 100, 0, 1, 0, 0, 0, 0),
    'ct': new Date(Math.ceil(date.getFullYear() / 100) * 100, 0, 1, 0, 0, 0, 0),
    'mlf': new Date(Math.floor(date.getFullYear() / 1000) * 1000, 0, 1, 0, 0, 0, 0),
    'mlt': new Date(Math.ceil(date.getFullYear() / 1000) * 1000, 0, 1, 0, 0, 0, 0),
    'net':new Date('2024-04-08T17:59:17.000Z')
  };
};
var hr = window.location.href;
if (hr.substr(0, 28) != 'https://coolguy284.github.io' && hr.substr(0, 35) != 'https://replit.org/data/web_project') {
 
