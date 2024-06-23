let rollButton = document.querySelector(".roll-button");
let diceRoller = document.querySelector(".dice-roller");
let historyList = document.querySelector(".history-list");

let count = 1;

rollButton.addEventListener("click", () => {
    diceRoller.classList.add("dice-rolling-animation");
    setTimeout(() => {
        diceRoller.classList.remove("dice-rolling-animation");
        rollDice();
    }, 1000);
})

const rollDice = () => {
    let rollResult = Math.ceil(Math.random() * 6);
    let diceFace = fordiceFace(rollResult);
    diceRoller.innerHTML = diceFace;
    let listItem = document.createElement("li");
    listItem.classList.add("history-item");
    listItem.innerHTML = `Roll ${count} : ${diceFace}`;
    historyList.appendChild(listItem);
    count++;
}

const fordiceFace = (rollResult) => {
    switch (rollResult) {
        case 1:
            return "&#9856";
        case 2:
            return "&#9857";
        case 3:
            return "&#9858";
        case 4:
            return "&#9859";
        case 5:
            return "&#9860";
        case 6:
            return "&#9861";
    }
}