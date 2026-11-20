// Firebase web config. It is NOT a secret (security comes from firestore.rules), so it is safe to commit.
// Firebase console > Project settings > Your apps > Web app > "SDK setup and configuration" > Config
window.APP_CONFIG = {
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  },
  // The one Firebase Authentication user (Email/Password) that is allowed to open the admin dashboard.
  // Must be identical to the email written in firestore.rules.
  adminEmail: "admin@yourcompany.com"
};
