function main() {
    const prompt = require("prompt-sync")({sigint: true});
    const word = "hangman";
    let lives = 5;
    const used = [];
    while (lives > 0) {
        const input = prompt("Letter: ").trim().toLowerCase().slice(0,1);
        if (!/[a-z]/.test(input)) {
            console.log("Invalid input.");
            continue;
        }
        if (word.includes(input)) {
            console.log(`Correct. Lives: ${lives}`);
        }
        else {
            lives--;
            console.log(`Wrong. Lives ${lives}`);
        }
    }
}

main();