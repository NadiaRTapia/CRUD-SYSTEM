
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBuUqheuVs8Tjx-qhh0F6Q0Ia0YEmrlNhw",
    authDomain: "sample-firebase-ai-app-abadb.firebaseapp.com",
    projectId: "sample-firebase-ai-app-abadb",
    storageBucket: "sample-firebase-ai-app-abadb.appspot.com",
    messagingSenderId: "1094836916771",
    appId: "1:1094836916771:web:36f07d17a0e480ed6a9796"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

  export { db, analytics, app}
