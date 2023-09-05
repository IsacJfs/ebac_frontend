document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("login-form");

    form.addEventListener("submit", function(event) {
        const password = document.getElementById("password").value;
        
        if (password.length <= 6) {
            alert("A senha deve ter mais de 6 dígitos.");
            event.preventDefault();
        }
    });
});