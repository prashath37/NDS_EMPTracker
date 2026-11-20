// Firebase web config. It is NOT a secret (security comes from firestore.rules), so it is safe to commit.
window.APP_CONFIG = {
  firebase: {
    apiKey: "AIzaSyAFy_diu1_edBiAnZLSIYlSHGvT2Z6NASA",
    authDomain: "nds-emptracker.firebaseapp.com",
    projectId: "nds-emptracker",
    storageBucket: "nds-emptracker.firebasestorage.app",
    messagingSenderId: "616657049212",
    appId: "1:616657049212:web:655ddcea06ab19eb79dbf9"
  },
  // The Firebase Authentication user (Email/Password) allowed to open the admin dashboard.
  // Must be identical to the email written in firestore.rules.
  adminEmail: "admin@yourcompany.com"
};
