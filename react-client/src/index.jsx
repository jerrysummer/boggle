import React from 'react';
import ReactDOM from 'react-dom';
import DiceGrid from './components/DiceGrid.jsx';
import CurrentWord from './components/CurrentWord.jsx';
import ScoreBoard from './components/ScoreBoard.jsx';
import logo from '../dist/logo.png';

import board from './helpers/diceRoller';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board,
      currentSelection: '',
      currentSelectionIndex: [],
      pastSelection: [],
    };
    this.handleDieSelect = this.handleDieSelect.bind(this);
    this.handleWordSubmit = this.handleWordSubmit.bind(this);
  }


  handleDieSelect(char, pos) {
    if (this.state.currentSelectionIndex.includes(pos)) return; // check if char already selected

    const newBoard = JSON.parse(JSON.stringify(this.state.board)); // deep copy board
    newBoard[pos].selected = true; // mark the selected char as 'selected' for css class assignment

    const newCurrentSelectionIndex = this.state.currentSelectionIndex.slice(); // clone current selections array
    newCurrentSelectionIndex.push(pos); // push new selection into selections

    this.setState({
      board: newBoard,
      currentSelection: this.state.currentSelection + char,
      currentSelectionIndex: newCurrentSelectionIndex,
    });
  }

  handleWordSubmit() {
    const currentSelection = this.state.currentSelection.slice(); // clone current selections
    const newPastSelection = this.state.pastSelection.slice().concat([currentSelection]); // add current selection to array of past selections

    if (currentSelection.length === 0) return; // error check empty selection

    const newBoard = JSON.parse(JSON.stringify(this.state.board)); // deep copy board
    newBoard.forEach((die) => { die.selected = false; }); // reset board, all dice != selected

    this.setState({
      board: newBoard,
      pastSelection: newPastSelection,
      currentSelection: '',
      currentSelectionIndex: [],
    });
  }

  render() {
    return (
      <div className="container">
        <img src={logo} alt="boggle logo" />
        <DiceGrid
          board={this.state.board}
          handleDieSelect={this.handleDieSelect}
        />
        <CurrentWord
          currentSelection={this.state.currentSelection}
          handleWordSubmit={this.handleWordSubmit}
        />
        <ScoreBoard
          pastSelection={this.state.pastSelection}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
