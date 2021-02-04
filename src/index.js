import logMessage from './js/logger'
import './css/style.css'
// Log message to console
logMessage('Welcome to LukeBax.net!');

const letters = document.querySelectorAll('#logo path');
console.log(letters);

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