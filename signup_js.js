 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyA-C7lZ4Ze63NoJsmm0CfYZxwAfsmpWXPQ",
   authDomain: "sign-up-8bca2.firebaseapp.com",
   projectId: "sign-up-8bca2",
   storageBucket: "sign-up-8bca2.firebasestorage.app",
   messagingSenderId: "818840838565",
   appId: "1:818840838565:web:9fe25ccf731944d140084c"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 
 const submit=document.getElementById('submit');
 submit.addEventListener("click",function(event){
  event.preventDefault()

  const email=document.getElementById('validationCustomEmail').value;
  const password=document.getElementById('password').value;
  const confirmPassword=document.getElementById('confirmPassword').value;
  createUserWithEmailAndPassword(auth, email, password,confirmPassword)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    window.location.href="home.html";
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
 })

 (() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
      
    }, false)
  })
})()


