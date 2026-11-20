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
  // Login page asks for a username. Firebase Authentication needs an email, so the username is
  // mapped to this email. Create this exact user in Firebase > Authentication > Users.
  adminUser: "admin",
  adminEmail: "admin@nds-emptracker.com"
};
