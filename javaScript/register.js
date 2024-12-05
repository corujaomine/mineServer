/** Klaian */
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";

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
const analytics = getAnalytics(app);

const registerForm = document.getElementById("register-form");
registerForm.addEventListener("submit", (e) => {
e.preventDefault();
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
console.log("Usuário cadastrado:", userCredential.user);
window.location.href = "index.html";
})
.catch((error) => {
console.error("Erro ao cadastrar:", error.message);
});
});
/** Klaian */
