importScripts(
  "https://www.gstatic.com/firebasejs/9.0.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.2/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyCihtmlyKeFa6MGXMrJ3DPUAm7s8k-TJyo",
  authDomain: "autocompromiso-32ca7.firebaseapp.com",
  databaseURL: "https://autocompromiso-32ca7-default-rtdb.firebaseio.com",
  projectId: "autocompromiso-32ca7",
  storageBucket: "autocompromiso-32ca7.appspot.com",
  messagingSenderId: "171009053819",
  appId: "1:171009053819:web:8fd75b1bdbde7a08eabede",
  measurementId: "G-E5P4RN1V8K",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  console.log(payload, "asdasd");
  const options = {
    body: payload.notification.body,
    icon: "/sinpauta.png",
    badge: payload.notification.image,
    click_action: payload.data.url,
    data: {
      url: payload.data.url,
    },
  };

  const url = payload.data.url;

  if (url) {
    clients.openWindow(url);
  }

  return self.registration.showNotification(
    payload.notification.title,
    options
  );
});

self.addEventListener('push', function(event) {
  const options = {
    body: '¡Hiciste clic en la notificación!',
    data: {
      url: 'https://www.google.com', // URL de destino
    }
  };

  event.waitUntil(
    self.registration.showNotification('Título de la notificación', options)
  );
});
