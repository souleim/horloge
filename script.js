const aigSeconde = document.querySelector('.seconde');
const aigMinute = document.querySelector('.minute');
const aigHeure = document.querySelector('.heure');

setInterval(programHorloge, 1000)

function programHorloge(){

let now = new Date();

let seconds = now.getSeconds();
let secondDeg = ((seconds / 60) *360) + 90;
aigSeconde.style.transform = `rotate(${secondDeg}deg)`;


let minutes = now.getMinutes();
let minuteDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6) +  90;
aigMinute.style.transform = `rotate(${minuteDeg}deg)`;


let heures = now.getHours();
let heureDeg = ((heures / 12) * 360) + ((minutes / 60) * 30) + 90;
aigHeure.style.transform = `rotate(${heureDeg}deg)`;



}

console.log(new Date());