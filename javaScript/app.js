/** Klaian */
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { 
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification 
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
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
const auth = getAuth(app);
const analytics = getAnalytics(app);

function showMessage(message, type) {
  const messageContainer = document.getElementById("message-container");
  const messageText = document.getElementById("message-text");

  messageText.textContent = message;
  messageContainer.style.display = "block"; 
  messageContainer.className = `message-container ${type}`;
}

const registerForm = document.getElementById("register-form");
const registerButton = document.getElementById("register-button");

registerButton.addEventListener("click", (e) => {
  e.preventDefault();

  const email = document.getElementById("emailr").value;
  const password = document.getElementById("passwordr").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      
      sendEmailVerification(user)
        .then(() => {
          showMessage("Verifique seu e-mail para confirmar o cadastro.", "info");
          console.log("E-mail de verificação enviado para:", user.email);

          document.getElementById('emailr').value = '';
          document.getElementById('passwordr').value = '';
        })
        .catch((error) => {
          console.error("Erro ao enviar email de verificação:", error.message);
          showMessage("Erro ao enviar email de verificação.", "error");
        });
    })
    .catch((error) => {
      console.error("Erro ao cadastrar usuário:", error.message);
      showMessage("Erro ao cadastrar. Verifique os dados.", "error");
      document.getElementById('emailr').value = '';
      document.getElementById('passwordr').value = '';
    });
});

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", (e) => {
  e.preventDefault(); 
  const email = document.getElementById("emaill").value;
  const password = document.getElementById("passwordl").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      if (user.emailVerified) {
        showMessage("Usuário logado com sucesso!", "success");
        setTimeout(function() {
          window.location.href = "home.html";
        }, 2000);
      } else {
        showMessage("Por favor, confirme seu e-mail antes de fazer login.", "warning");
        console.log("E-mail não verificado para:", user.email);
      }
    })
    .catch((error) => {
      console.error("Erro ao fazer login:", error.message);
      showMessage("Login INCORRETO!", "error");
      document.getElementById('emaill').value = '';
      document.getElementById('passwordl').value = '';
    });
});
/** Klaian */
