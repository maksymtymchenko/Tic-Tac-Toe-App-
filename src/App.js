import React from "react";

const App = () => {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [counter, setCounter] = React.useState(0);

  // winner line combinations
  let winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // check to the winner
  const isWinner = () => {
    let player = counter % 2 === 0 ? "x" : "o";
    for (let i = 0; i < 8; i++) {
      let line = winner[i];
      if (
        squares[line[0]] === player &&
        squares[line[1]] === player &&
        squares[line[2]] === player
      ) {
        alert(player + " win");
        setTimeout(() => {
          setSquares(Array(9).fill(null));
          setCounter();
        }, 2000);
      }
    }
  };

  // add X or O
  const clicked = (event) => {
    let data = event.target.getAttribute("data");
    let current = squares;
    if (current[data] === null) {
      current[data] = counter % 2 === 0 ? "x" : "o";
      setCounter(counter + 1);
      setSquares(current);
      console.log("worked");
    } else {
      alert("You cant");
    }
    isWinner();
  };

  return (
    <div>
      <h2>Tic Tac Toe App</h2>
      <div className="square__wrapper">
        {squares.map((square, index) => (
          <div
            key={index}
            data={index}
            onClick={clicked}
            className="square__item"
          >
            {square}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
