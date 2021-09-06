 import { Notification as Toast } from 'rsuite';
 import { initializeApp } from 'firebase/app';
 import { getAuth } from 'firebase/auth';
 import { getDatabase } from 'firebase/database';
 import { getStorage } from 'firebase/storage';
 import { getMessaging, isSupported, onMessage } from 'firebase/messaging';
 import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
 import { isLocalhost } from './helpers';
 const config={
    apiKey: "AIzaSyDwo97K3ygiULZTMf1Fwfam-mdBe-qoa0c",
    authDomain: "chat-web-app-4e681.firebaseapp.com",
    databaseURL: "https://chat-web-app-4e681-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chat-web-app-4e681",
    storageBucket: "chat-web-app-4e681.appspot.com",
    messagingSenderId: "425343071289",
    appId: "1:425343071289:web:627ba7417054439c9a09e8"
  }


  export const fcmVapidKey =
  'BLs_I-HQyrAuUJJh8H3U0vtHGhVhXLMqoVoomeNL90GMKm0-o7sSoN9CJYRiBAVz-Yi7ZAni8mKateJfDwodTnw';

const app = initializeApp(config);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);
export const functions = getFunctions(app, 'europe-west3');

export const messaging = isSupported() ? getMessaging(app) : null;

if (messaging) {
  onMessage(messaging, ({ notification }) => {
    const { title, body } = notification;
    Toast.info({ title, description: body, duration: 0 });
  });
}

if (isLocalhost) {
  connectFunctionsEmulator(functions, 'localhost', 5001);
}
