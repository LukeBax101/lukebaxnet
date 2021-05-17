import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/messaging";

const homeInit = () => {
  var firebaseConfig = {
      apiKey: "AIzaSyAUUJniO6QHXeKihArx1vcSd1YsfXVhe70",
      authDomain: "lukebaxnet.firebaseapp.com",
      projectId: "lukebaxnet",
      storageBucket: "lukebaxnet.appspot.com",
      messagingSenderId: "702862570223",
      appId: "1:702862570223:web:a5088a9acedb837759211a",
      measurementId: "G-XW0RMDJ7HX"
    };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const messaging = firebase.messaging();
  navigator.serviceWorker.register(new URL('./lukebaxnet-service-worker.js', import.meta.url)).then(registration => {
    console.log(registration)
    if (registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
    messaging.getToken({ vapidKey: 'BHkv3xaINTj0gjxEV4e5OaG2EVcNkisxbenSosZo3sVazU9S3du1hUushzlgZqww_aynLLcJYsA_bnyXd3A_i-8', serviceWorkerRegistration: registration }).then((currentToken) => {
      if (currentToken) {
        // Send the token to your server and update the UI if necessary
        console.log(currentToken);
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
  })

  messaging.onMessage((payload) => {
    console.log('Message received. ', payload);
  });

  // Only needed for debugging
  // const letters = document.querySelectorAll('#logo path');
  // for (let i=0;  i < letters.length; i++ ) {
  //     console.log(`Letter ${i} is ${letters[i].getTotalLength()}`)
  // }

  // const logos = document.querySelectorAll('#logo line');
  // for (let i=0;  i < logos.length; i++ ) {
  //     console.log(`Logo ${i} is ${logos[i].getTotalLength()}`)
  // }

  CSS.registerProperty( {
          name: '--pos',
          syntax: '<length-percentage>',
          initialValue: '0%',
          inherits: true
      }
  );
 
  window.homeInit = true;
  console.log('Welcome to LukeBax.net!')
  console.log('home page initialised');
}


const homeRepeat = () => {
  console.log('running home repeat code');
  const pingButton = document.querySelector('#ping');

  pingButton.addEventListener('click', () => {
    console.log('ping');
  })
}

export { homeInit, homeRepeat };