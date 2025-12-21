  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDznEC5JACA5lFsJHjJ815RX5UCN5UMuC0",
  authDomain: "data-tpq.firebaseapp.com",
  projectId: "data-tpq",
  storageBucket: "data-tpq.firebasestorage.app",
  messagingSenderId: "1008563211656",
  appId: "1:1008563211656:web:f603c9804c6b395b7e3e3d"
  };

  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
