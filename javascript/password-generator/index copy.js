
function generatePassword() {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-="
    const length = document.getElementById("numInput").value;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;
    let allowedChars = "";
    let password = "";


    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";


    if (!length || length < 1) {
        document.getElementById("result").textContent = "Password length must be at least 1.";
        return;
    }

    if (allowedChars.length === 0) {
        document.getElementById("result").textContent = "Select at least one character type.";
        return;
    }
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length)
        password += allowedChars[randomIndex];
    }

    document.getElementById("result").textContent = password;
    console.log(`Generated Password: ${password}`)
}





