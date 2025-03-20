// firebase-messaging-sw.js
importScripts(
  "https://www.gstatic.com/firebasejs/11.4.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/11.4.0/firebase-messaging-compat.js"
);

// 🔹 Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5Alcu-llcKWijM-ZALovRTZ8Stni6oKs",
  authDomain: "djmm-22800.firebaseapp.com",
  projectId: "djmm-22800",
  storageBucket: "djmm-22800.firebasestorage.app",
  messagingSenderId: "362061972330",
  appId: "1:362061972330:web:70e8f617cef2f03ebd9b13",
  measurementId: "G-VZGL9FDL2N",
};

// ✅ Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// ✅ Background Message Handler
messaging.onBackgroundMessage((payload) => {
  console.log("Received background message:", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/firebase-logo.png", // Add your own icon here
  });
});
