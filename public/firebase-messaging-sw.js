importScripts(
  "https://www.gstatic.com/firebasejs/9.0.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.2/firebase-messaging-compat.js"
);

const firebaseConfig = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  const options = {
    body: payload.notification.body,
    icon: "https://www.sinpauta.com/sinpauta.png",
    badge: payload.notification.image,
    click_action: payload.data.url,
    data: {
      url: payload.data.url,
    },
  };

  return self.registration.showNotification(
    payload.notification.title,
    options
  );
});

self.addEventListener("notificationclick", function (event) {
  const url = event.notification.data.url;

  if (url) {
    event.waitUntil(clients.openWindow(url)); // Abre la URL en una nueva ventana o pestaña
  }
  
  event.notification.close(); // Cierra la notificación
});

