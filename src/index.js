import { register } from 'register-service-worker';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/messaging";

import logMessage from './js/logger'
import './css/style.scss'
// Log message to console
logMessage('Welcome to LukeBax.net!');

var firebaseConfig = {
    apiKey: "AIzaSyAUUJniO6QHXeKihArx1vcSd1YsfXVhe70",
    authDomain: "lukebaxnet.firebaseapp.com",
    projectId: "lukebaxnet",
    storageBucket: "lukebaxnet.appspot.com",
    messagingSenderId: "702862570223",
    appId: "1:702862570223:web:a5088a9acedb837759211a",
    measurementId: "G-XW0RMDJ7HX"
  };
// Initialize Firebase


firebase.initializeApp(firebaseConfig);
firebase.analytics();


const messaging = firebase.messaging();
navigator.serviceWorker.register('/lukebaxnet-service-worker.js').then(registration => {
  // firebase.messaging().useServiceWorker(registration)
  console.log(registration)
  if (registration.waiting) {
     registration.waiting.postMessage({ type: 'SKIP_WAITING' });
  }
  messaging.getToken({ vapidKey: 'BHkv3xaINTj0gjxEV4e5OaG2EVcNkisxbenSosZo3sVazU9S3du1hUushzlgZqww_aynLLcJYsA_bnyXd3A_i-8', serviceWorkerRegistration: registration }).then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
      console.log(currentToken);
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
      // ...
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
  });
})

messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
  // ...
});

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