// All of bulma
import Bulma from '@vizuaalog/bulmajs';
import ProgressBar from 'progressbar.js';

var dwarfLevel = new ProgressBar.Line('#dwarfLevel', {
  easing: 'easeInOut',
  duration: 1400,

});

var dwarfExp = new ProgressBar.Line('#dwarfExp', {
  easing: 'easeInOut',
  duration: 1400,
  color: '#0047ab',
  svgStyle: {width: '100%', height: '100%'}
});

var dwarf1 = new ProgressBar.Line('#dwarf1', {
  easing: 'easeInOut',
  duration: 1400,
  color: '#0047ab',
  svgStyle: {width: '100%', height: '100%'}
});

var dwarf2 = new ProgressBar.Line('#dwarf2', {
  easing: 'easeInOut',
  duration: 1400,
  color: '#0047ab',
  svgStyle: {width: '100%', height: '100%'}
});

var dwarf3 = new ProgressBar.Line('#dwarf3', {
  easing: 'easeInOut',
  duration: 1400,
  color: '#0047ab',
  svgStyle: {width: '100%', height: '100%'}
});

var wizardLevel = new ProgressBar.Line('#wizardLevel', {
  easing: 'easeInOut',
  duration: 1400,
  color: '#0047ab',
  svgStyle: {width: '100%', height: '100%'}
});

var wizardExp = new ProgressBar.Line('#wizardExp', {
  easing: 'easeInOut',
  duration: 1400,
  color: '#c2b280',
  svgStyle: {width: '100%', height: '100%'}
});

var wizard1 = new ProgressBar.Line('#wizard1', {
  easing: 'easeInOut',
  duration: 1400,
  color: '#c2b280',
  svgStyle: {width: '100%', height: '100%'}
});

var wizard2 = new ProgressBar.Line('#wizard2', {
  easing: 'easeInOut',
  duration: 1400,
  color: '#c2b280',
  svgStyle: {width: '100%', height: '100%'}
});

var wizard3 = new ProgressBar.Line('#wizard3', {
  easing: 'easeInOut',
  duration: 1400,
  color: '#c2b280',
  svgStyle: {width: '100%', height: '100%'}
});

var warriorLevel = new ProgressBar.Line('#warriorLevel', {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#0047ab',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'}
});

var warriorExp = new ProgressBar.Line('#warriorExp', {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#c2b280',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'}
});

var archerLevel = new ProgressBar.Line('#archerLevel', {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#0047ab',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'}
});

var archerExp = new ProgressBar.Line('#archerExp', {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#c2b280',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'}
});



window.onload = function onLoad() {
    dwarfLevel.animate(0.7);
    dwarfExp.animate(0.9);
    dwarf1.animate(0.7);
    dwarf2.animate(0.8);
    dwarf3.animate(0.8);
    wizardLevel.animate(0.6);
    wizardExp.animate(0.5);
    wizard1.animate(0.6);
    wizard2.animate(0.4);
    wizard3.animate(0.8);
    warriorLevel.animate(0.8);
    warriorExp.animate(0.6);
    archerLevel.animate(0.6);
    archerExp.animate(0.7);
};