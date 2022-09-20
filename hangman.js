function main() {
    const prompt = require("prompt-sync")({ sigint: true });
    const word = "hangman";
    const wordOut = { ..."*".repeat(word.length) };
    let won = false;
    let lives = 5;
    const used = [];
    let displayWord = Object.values(wordOut).join("");
    while (lives > 0) {
        console.log(displayWord);
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
            for (let i of findIndexes(word, input)) {
                wordOut[i] = input;
            }
            displayWord = Object.values(wordOut).join("");
        }
        else {
            lives--;
            console.log(`Wrong. Lives ${lives}`);
        }

        if (!displayWord.includes("*")) {
            won = true;
            break;
        }
    }
    if (won) {
        console.log("Congratulations! You won!");
    }
    else {
        console.log(`You lost. The word is ${word}.`)
    }
}

function findIndexes(word, input) {
    return [...word].reduce((indexArray, value, indexCurrent) => {
        if (value === input) {
            indexArray.push(indexCurrent);
        }
        return indexArray;
    }, []);
}

main();