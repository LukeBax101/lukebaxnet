import logMessage from './js/logger'
import './css/style.scss'
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

// const centerPanel = document.querySelector('.headshot');

// centerPanel.addEventListener('mousemove', (e) => {
//   const panelRect = centerPanel.getBoundingClientRect();
//   const rotX = Math.sin(((e.pageX - panelRect.x - (panelRect.width/2))/(panelRect.width/2))* Math.PI) * 20;
//   const rotY = Math.sin(((e.pageY - panelRect.y - (panelRect.height/2))/(panelRect.height/2))* Math.PI) * 10;
//   centerPanel.style.transform = `rotateY(${rotX}deg) rotateX(${-rotY}deg)`;
// });