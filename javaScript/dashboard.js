import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA4ihwyEAeXYNZE_R-J-jgT7a2GhjHLniU",
  authDomain: "corujaominecraft.firebaseapp.com",
  projectId: "corujaominecraft",
  storageBucket: "corujaominecraft.firebasestorage.app",
  messagingSenderId: "934208786967",
  appId: "1:934208786967:web:ba94b840841f932ae48252",
  measurementId: "G-4G7G621H88"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById('user-info').textContent = `Logado como: ${user.email}`;
  } else {
    window.location.href = 'index.html';
  }
});

const logoutButton = document.getElementById('logout-button');
logoutButton.addEventListener('click', () => {
  signOut(auth).then(() => {
    console.log("Usuário deslogado");
    window.location.href = 'index.html';
  }).catch((error) => {
    console.error("Erro ao deslogar:", error.message);
  });
});
