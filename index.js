// Import stylesheets
import './style.css';
// Firebase App (the core Firebase SDK) is always required
import { initializeApp } from 'firebase/app';

// Add the Firebase products and methods that you want to use
import { getAuth, EmailAuthProvider } from 'firebase/auth';
import {} from 'firebase/firestore';

import * as firebaseui from 'firebaseui';

// Document elements
const startRsvpButton = document.getElementById('startRsvp');
const guestbookContainer = document.getElementById('guestbook-container');

const form = document.getElementById('leave-message');
const input = document.getElementById('message');
const guestbook = document.getElementById('guestbook');
const numberAttending = document.getElementById('number-attending');
const rsvpYes = document.getElementById('rsvp-yes');
const rsvpNo = document.getElementById('rsvp-no');

let rsvpListener = null;
let guestbookListener = null;

let db, auth;

async function main() {
  // Add Firebase project configuration object here

const firebaseConfig = {
  apiKey: "AIzaSyARfaKdFww8DjNJfgaLdg0WnL4m6HI5TYU",
  authDomain: "fir-web-codelab-d6d01.firebaseapp.com",
  projectId: "fir-web-codelab-d6d01",
  storageBucket: "fir-web-codelab-d6d01.appspot.com",
  messagingSenderId: "772675890534",
  appId: "1:772675890534:web:6f40fd85c7cbc43e9a6ca7",
  measurementId: "G-1RBX8JL1RF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  // initializeApp(firebaseConfig);
  initializeApp(firebaseConfig);
  auth = getAuth();
  // FirebaseUI config
  const uiConfig = {
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [
      // Email / Password Provider.
      EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // Handle sign-in.
        // Return false to avoid redirect.
        return false;
      }
    }
  };

  // const ui = new firebaseui.auth.AuthUI(auth);
  const ui = new firebaseui.auth.AuthUI(auth);
  startRsvpButton.addEventListener("click",
   () => {
        ui.start("#firebaseui-auth-container", uiConfig);
  });
}
main();
