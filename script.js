const passwordBox = document.getElementById("password");
const lengthBox = document.getElementById("length");
const length = lengthBox.value;

function generateRandomPassword() {
    const getRandomChar = () => {
        const charSets = [
            [48, 57], // Numbers (0-9)
            [65, 90], // Uppercase Letters (A-Z)
            [97, 122], // Lowercase (a-z)
            [33, 47], // Special characters (!-/)
        ];

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

// function function generateRandomPassword() {
//   return Math.random().toString(36).slice(2) +
//     Math.random().toString(36).toUpperCase().slice(2);
// }
