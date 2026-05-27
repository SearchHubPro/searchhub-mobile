importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyApLErkBMaLTKLAVDeA_-aZYMnPilaDGU8",
  authDomain: "searchhub-mobile.firebaseapp.com",
  projectId: "searchhub-mobile",
  storageBucket: "searchhub-mobile.firebasestorage.app",
  messagingSenderId: "18757861506",
  appId: "1:18757861506:web:4826ba1337e48431f0f49b"
});

const messaging = firebase.messaging();

// 💡 サーバー（GAS）から "notification" ペイロードが送られてくる場合、
// Firebase SDK が自動で通知を表示してくれます。
// そのため、ここで手動の onBackgroundMessage や showNotification() を書くと
// 通知が2重にダブってしまうため、あえて何も書かないのが正解です！
