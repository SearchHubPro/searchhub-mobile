importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyApLErkBMaLTKLAVDeA_-aZYMnPilaDGU8",
  authDomain: "searchhub-mobile.firebaseapp.com",
  projectId: "searchhub-mobile",
  storageBucket: "searchhub-mobile.firebasestorage.app",
  messagingSenderId: "18757861506",
  appId: "1:18757861506:web:4826ba1337e48431f0f49b"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// スマホがバックグラウンド（アプリを閉じている時）に通知を受け取る処理
messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://i.ibb.co/Xrt68V7p/icon.png',
    data: payload.data
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
