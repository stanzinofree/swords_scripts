// All of bulma
import Bulma from '@vizuaalog/bulmajs';
import ProgressBar from 'progressbar.js';

var dwarfLevel = new ProgressBar.Line('#dwarfLevel', {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#0047ab',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'}
});

var dwarfExp = new ProgressBar.Line('#dwarfExp', {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#c2b280',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'}
});

var wizardLevel = new ProgressBar.Line('#wizardLevel', {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#0047ab',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'}
});

var wizardExp = new ProgressBar.Line('#wizardExp', {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#c2b280',
  trailColor: '#eee',
  trailWidth: 1,
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
    wizardLevel.animate(0.4);
    wizardExp.animate(0.5);
    warriorLevel.animate(0.8);
    warriorExp.animate(0.6);
    archerLevel.animate(0.6);
    archerExp.animate(0.7);
};