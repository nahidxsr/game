// বাটন ক্লিক করলে গেম পেজে যাবে
function redirectToGame() {
    window.location.href = "https://your-game-link.com"; // এখানে গেমের লিংক দাও
}

// "Nahid Bro" ASCII নামের সংখ্যা পরিবর্তনের জন্য
const asciiName = document.getElementById("nahid-name");
let asciiText = asciiName.innerHTML;
function glitchText() {
    asciiText = asciiText.replace(/[A-Z]/g, function() {
        return Math.floor(Math.random() * 10); // এলোমেলো সংখ্যা বসানো
    });
    asciiName.innerHTML = asciiText;
    setTimeout(glitchText, 500);
}
glitchText();

// ব্যাকগ্রাউন্ডের সংখ্যা পরিবর্তন
const matrixBackground = document.querySelector(".matrix-background");
function generateMatrixNumbers() {
    let matrixText = "";
    for (let i = 0; i < 500; i++) { // এলোমেলো সংখ্যার ব্যাকগ্রাউন্ড
        matrixText += Math.floor(Math.random() * 10) + " ";
        if (i % 50 === 0) matrixText += "\n";
    }
    matrixBackground.innerText = matrixText;
}
setInterval(generateMatrixNumbers, 300);
