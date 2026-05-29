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

// =========================================================================
// ★ ここから追加：通知が届いた瞬間に「赤丸バッジ」をつける専用の処理
// =========================================================================
self.addEventListener('push', function(event) {
  // スマホ（OS）がバッジ機能に対応しているか確認
  if ('setAppBadge' in navigator) {
    // 画面の通知はFirebaseに任せつつ、裏でアイコンに「1（赤丸）」をつける
    navigator.setAppBadge(1).catch(function(error) {
      console.error("バッジ設定エラー:", error);
    });
  }
});
