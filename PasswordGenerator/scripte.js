
var used = 0;
const passwordBox = document.getElementById("Password")
function GeneratePassword() {
    used = 1;
    var password = "";
    const length = 12;

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbole = `!@#$%^&*()_+-={}[]|\:;"'<>,.?/`;

    const allChars = upperCase + lowerCase + numbers + symbole;

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    console.log(password);
    passwordBox.value = password;
}

function copyPass() {
    passwordBox.select();
    document.execCommand("copy");
}