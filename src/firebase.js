import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCbzIBRby50VIT_vPOmEwo-1pELSJgUs9U",
    authDomain: "lindkedin-clone.firebaseapp.com",
    projectId: "lindkedin-clone",
    storageBucket: "lindkedin-clone.appspot.com",
    messagingSenderId: "624586227239",
    appId: "1:624586227239:web:67aa8e198d19df656f1802"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};