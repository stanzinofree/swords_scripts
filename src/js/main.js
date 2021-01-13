// All of bulma
import Bulma from '@vizuaalog/bulmajs';
import ProgressBar from 'progressbar.js';

function defineBar(name, color){
    let obj = new ProgressBar.Line(`#${name}`, {
      easing: 'easeInOut',
      duration: 1400,
      color: color,
      svgStyle: {width: '100%', height: '100%'}
    });
    return obj;
}

let dwarfCOL = '#3D3D3D';
let wizardCOL = '#66285b';
let knightCOL = '#7e0d00';
let archerCOL = '#296307';
let hackerCOL = '#0e4353';

let dwarfLevel = defineBar('dwarfLevel', dwarfCOL);
let dwarf1 = defineBar('dwarf1', dwarfCOL);
let dwarf2 = defineBar('dwarf2', dwarfCOL);
let dwarf3 = defineBar('dwarf3', dwarfCOL);

let wizardLevel = defineBar('wizardLevel', wizardCOL);
let wizard1 = defineBar('wizard1', wizardCOL);
let wizard2 = defineBar('wizard2', wizardCOL);
let wizard3 = defineBar('wizard3', wizardCOL);

let knightLevel = defineBar('knightLevel', knightCOL);
let knight1 = defineBar('knight1', knightCOL);
let knight2 = defineBar('knight2', knightCOL);
let knight3 = defineBar('knight3', knightCOL);

let archerLevel = defineBar('archerLevel', archerCOL);
let archer1 = defineBar('archer1', archerCOL);
let archer2 = defineBar('archer2', archerCOL);
let archer3 = defineBar('archer3', archerCOL);

let hackerLevel = defineBar('hackerLevel', hackerCOL);
let hacker1 = defineBar('hacker1', hackerCOL);
let hacker2 = defineBar('hacker2', hackerCOL);
let hacker3 = defineBar('hacker3', hackerCOL);


document.querySelector('#hacker_modal_button').addEventListener('click', function(e) {
    var modalTwo = Bulma('#hacker_modal').modal();
    modalTwo.open();
});


var ShellStyle = "color:#7d92fb;font-weight:bold;";
var BrandStyle = "font-size:34px; font-weight:200; letter-spacing:0.02em; line-height:1.4em; font-family:helvetica,arial; color:rgba(0,0,0,0.9);";
var AlexStyle = "font-size:21px; font-weight:200; letter-spacing:0.2em; line-height:1.4em; font-family:helvetica,arial; color:rgba(0,0,25,0.5);";
var shell = "\n%c \n     ###    ##       ######## ##     ##          ######  ##     ## ######## ##       ##       \n    ## ##   ##       ##        ##   ##          ##    ## ##     ## ##       ##       ##       \n   ##   ##  ##       ##         ## ##           ##       ##     ## ##       ##       ##       \n  ##     ## ##       ######      ###    #######  ######  ######### ######   ##       ##       \n  ######### ##       ##         ## ##                 ## ##     ## ##       ##       ##       \n  ##     ## ##       ##        ##   ##          ##    ## ##     ## ##       ##       ##       \n  ##     ## ######## ######## ##     ##          ######  ##     ## ######## ######## ######## \n";
function shellView(){
console.log(shell, ShellStyle);
console.log("%cEasterEgg Trovato!!!!!", BrandStyle), console.log("%cCustom Shell by Alessandro Middei v. 1.0", AlexStyle), console.log("%c", "font-size:34px; line-height:1.4em;");
}


window.onload = function onLoad() {
    shellView();
    dwarfLevel.animate(0.7);
    dwarf1.animate(0.7);
    dwarf2.animate(0.8);
    dwarf3.animate(0.8);
    wizardLevel.animate(0.6);
    wizard1.animate(0.6);
    wizard2.animate(0.4);
    wizard3.animate(0.7);
    knightLevel.animate(0.8);
    knight1.animate(0.9);
    knight2.animate(0.7);
    knight3.animate(0.7);
    archerLevel.animate(0.5);
    archer1.animate(0.6);
    archer2.animate(0.6);
    archer3.animate(0.6);
    hackerLevel.animate(0.6);
    hacker1.animate(0.6);
    hacker2.animate(0.8);
    hacker3.animate(0.7);
};