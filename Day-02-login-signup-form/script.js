// Password Toggle

const toggleIcons = document.querySelectorAll(".toggle-password");

toggleIcons.forEach(icon => {

    icon.addEventListener("click", () => {

        const passwordInput = icon.previousElementSibling;

        if(passwordInput.type === "password"){
            passwordInput.type = "text";
            icon.classList.remove("bi-eye-slash");
            icon.classList.add("bi-eye");
        } else {
            passwordInput.type = "password";
            icon.classList.remove("bi-eye");
            icon.classList.add("bi-eye-slash");
        }

    });

});


// Login Validation

const loginForm = document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit", function(e){

        e.preventDefault();

        const email = document.getElementById("loginEmail");
        const password = document.getElementById("loginPassword");

        validateField(email, "Email is required");
        validateField(password, "Password is required");

    });

}


// Signup Validation

const signupForm = document.getElementById("signupForm");

if(signupForm){

    signupForm.addEventListener("submit", function(e){

        e.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("signupEmail");
        const password = document.getElementById("signupPassword");

        validateField(name, "Name is required");
        validateField(email, "Email is required");
        validateField(password, "Password is required");

    });

}


// Validation Function

function validateField(input, message){

    const error = input.nextElementSibling;

    if(input.value.trim() === ""){
        error.innerText = message;
        input.style.border = "1px solid red";
    } else {
        error.innerText = "";
        input.style.border = "1px solid green";
    }

}