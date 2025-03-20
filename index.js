const signs = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

function getRandomSign() {
    let randomSign = Math.floor(Math.random() * signs.length);
    return signs[randomSign];
}

function getRandomPassword(length) {
    let randomPassword = "";
    for (let i = 0; i < length; i++) {
        randomPassword += getRandomSign();
    }
    return randomPassword;
}

function generatePassword() {
    let passwordLength = document.getElementById("passwordLength").value;
    let passwordOne = document.getElementById("passwordOne");
    let passwordTwo = document.getElementById("passwordTwo");
    passwordOne.textContent = getRandomPassword(passwordLength);
    passwordTwo.textContent = getRandomPassword(passwordLength);
}

function copyPassword(id, button) {
    let passwordText = document.getElementById(id).textContent;
    if (passwordText) {
        navigator.clipboard.writeText(passwordText).then(() => {
            button.classList.add("copied"); // Füge Animation hinzu
            setTimeout(() => {
                button.classList.remove("copied"); // Entferne sie nach 300ms
            }, 300);
        });
    }
}


