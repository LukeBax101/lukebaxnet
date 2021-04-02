importScripts('https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyAUUJniO6QHXeKihArx1vcSd1YsfXVhe70",
    authDomain: "lukebaxnet.firebaseapp.com",
    projectId: "lukebaxnet",
    storageBucket: "lukebaxnet.appspot.com",
    messagingSenderId: "702862570223",
    appId: "1:702862570223:web:a5088a9acedb837759211a",
    measurementId: "G-XW0RMDJ7HX",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received new new new background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/img/EngagmentHeadshot.jpg'
  };
  console.log(self.registration)
  self.registration.showNotification(notificationTitle,
    notificationOptions);
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
