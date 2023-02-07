const squares = document.querySelectorAll(".squar");
const header = document.querySelector("header");
const span = header.querySelector("span");

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let counter = 0;

squares.forEach((square) => {
    square.addEventListener("click", () => {
        if (square.innerHTML !== "") return;

        square.innerHTML = counter % 2 === 0 ? "X" : "O";
        counter++;

        span.innerHTML = counter % 2 === 0 ? "X Turn" : "X Turn";

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (
                squares[a].innerHTML === squares[b].innerHTML &&
                squares[a].innerHTML === squares[c].innerHTML &&
                squares[a].innerHTML !== ""
            ) {
                header.innerHTML = squares[a].innerHTML + " Wins!";
                squares.forEach(square => square.removeEventListener("click", () => { }));
                setTimeout(() => {
                    window.location.reload();

                }, 1000);

                return;
            }
        }

        if (counter === 9) {
            header.innerHTML = "Draw";
        }
    });
});

span.innerHTML = "X Turn";
