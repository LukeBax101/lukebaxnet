import logMessage from './js/logger'
import './css/style.css'
// Log message to console
logMessage('Welcome to LukeBax.net!');

// Needed for Hot Module Replacement
if(typeof(module.hot) !== 'undefined') {
  module.hot.accept() // eslint-disable-line no-undef  
}

const letters = document.querySelectorAll('#logo path');
for (let i=0;  i < letters.length; i++ ) {
    console.log(`Letter ${i} is ${letters[i].getTotalLength()}`)
}

CSS.registerProperty( {
        name: '--pos',
        syntax: '<length-percentage>',
        initialValue: '0%',
        inherits: true
    }
);

const centerPanel = document.querySelector('.center-panel');
let panelY = centerPanel.getBoundingClientRect().y;
let panelX = centerPanel.getBoundingClientRect().x;
let panelWidth = centerPanel.getBoundingClientRect().width;
let panelHeight = centerPanel.getBoundingClientRect().height;

window.addEventListener('resize', (e) => {
  panelY = centerPanel.getBoundingClientRect().y;
  panelX = centerPanel.getBoundingClientRect().x;
  panelWidth = centerPanel.getBoundingClientRect().width;
  panelHeight = centerPanel.getBoundingClientRect().height;
});

centerPanel.addEventListener('mousemove', (e) => {
  const rotX = Math.sin(((e.pageX - panelX - (panelWidth/2))/(panelWidth/2))* Math.PI) * 20;
  const rotY = Math.sin(((e.pageY - panelY - (panelHeight/2))/(panelHeight/2))* Math.PI) * 10;
  centerPanel.style.transform = `rotateY(${rotX}deg) rotateX(${-rotY}deg)`;
});