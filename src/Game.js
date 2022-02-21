import React from 'react';



const Game = () => {

// const [history, setHistory] = useState(second);

  return <div></div>;
};

export default Game;



// class Game extends React.Component {
//     constructor(props) {
//       super(props);

//       this.state = {
//         history: [{
//           squares: Array(25).fill(null),
//         }],
//         stepNumber: 0,
//         xTurn: true,
//       };
//     }
  
//     handleClick(i) {
//       const history = this.state.history.slice(0, this.state.stepNumber + 1);
//       const current = history[history.length-1];
//       const squares = current.squares.slice();
//       if (declareWinner(squares) || squares[i]) {
//         return;
//       }
//       squares[i] = this.state.xTurn ? 'X' : 'O';
//       this.setState({
//         history: history.concat([{
//           squares: squares
//         }]),
//         stepNumber: history.length,
//         xTurn: !this.state.xTurn,
//       });
//     }
  
//     jumpTo(step) {
//       this.setState({
//         history: [{
//           squares: Array(25).fill(null),
//         }],
//         stepNumber: step,
//         xTurn: (step%2) === 0,
//       });
//     }
  
//     render() {
//       const history = this.state.history;
//       const current = history[history.length - 1];
//       const moves = history.map((step, move) => {
//         if (move === 0) {
//           return (
//             <div key={move}>
//               <button onClick={() => this.jumpTo(move)}>{"Reset Game"}</button>
//             </div>
//           );
//         } else {
//           return null;
//         }
//       });
  
//       let status;
//       if (declareWinner(current.squares) === 25) {
//         status = 'Tie Game! Reset?';
//       } else if (declareWinner(current.squares) != null) {
//         status = 'Winner: ' + declareWinner(current.squares) + '  ...Play Again?';
//       } else {
//         status = 'Your turn: ' + (this.state.xTurn ? 'X' : 'O');
//       }
  
//       return (
//         <div className="game">
//           <div className="game-board">
//             <Board 
//               squares = {current.squares}
//               onClick={i => this.handleClick(i)}
//             />
//           </div>
//           <div className="game-info">
//             <div>{status}</div>
//             <ol>{moves}</ol>
//           </div>
//         </div>
//       );
//     }
//   }
  