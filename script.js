const passwordBox = document.getElementById("password");
const specialCharacters = document.getElementById("special-characters");
const uppercaseLetters = document.getElementById("uppercase-letters");
const lengthBox = document.getElementById("length");

function generateRandomPassword() {
    const length = parseInt(lengthBox.value);

    const getRandomChar = () => {
        const charSets = [
            [48, 57], // Numbers (0-9)
            [97, 122], // Lowercase (a-z)
        ];

        if (uppercaseLetters.checked) {
            charSets.push([65, 90]); // Uppercase Letters (A-Z)
        }

        if (specialCharacters.checked) {
            charSets.push([33, 47]); // Special characters (!-/)
        }

        const charSet = charSets[Math.floor(Math.random() * charSets.length)];

        const charCode =
            Math.floor(Math.random() * (charSet[1] - charSet[0] + 1)) + charSet[0];

        return String.fromCharCode(charCode);
    };

    let password = "";
    for (let i = 0; i < length; i++) {
        password += getRandomChar();
    }

    passwordBox.value = password;
}

function copyPassword() {
    const passwordInput = document.getElementById("password");
    const passwordText = passwordInput.value;

    navigator.clipboard.writeText(passwordText)
        .then(() => {
            console.log("Password copied to clipboard!");
            // Optionally display a success message to the user (see below)
        })
        .catch(() => {
            console.error("Failed to copy password!");
        });
}

// function function generateRandomPassword() {
//   return Math.random().toString(36).slice(2) +
//     Math.random().toString(36).toUpperCase().slice(2);
// }
