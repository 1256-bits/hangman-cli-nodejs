function main() {
    const prompt = require("prompt-sync")({ sigint: true });
    const word = "hangman";
    let won = false;
    let lives = 5;
    const used = [];
    while (lives > 0) {
        const input = prompt("Letter: ").trim().toLowerCase().slice(0, 1);
        if (!/[a-z]/.test(input)) {
            console.log("Invalid input.");
            continue;
        }
        if (used.includes(input)) {
            console.log(`${input} is already used`);
            continue;
        }
        if (word.includes(input)) {
            console.log(`Correct. Lives: ${lives}`);
            used.push(input);
        }
        else {
            lives--;
            console.log(`Wrong. Lives ${lives}`);
        }
    }
    if (won) {
        console.log("Congratulations! You won!");
    }
    else {
        console.log(`You lost. The word is ${word}.`)
    }
}

main();