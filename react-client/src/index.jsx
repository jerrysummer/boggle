import React from 'react';
import ReactDOM from 'react-dom';
import DiceGrid from './components/DiceGrid.jsx';
import CurrentWord from './components/CurrentWord.jsx';
import ScoreBoard from './components/ScoreBoard.jsx';
import logo from '../dist/logo.png';

import board from './helpers/diceRoller';
import validDice from './helpers/dieSelectability';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board,
      currentSelection: '',
      currentSelectionIndex: [],
      pastSelection: [],
      validDice: validDice[25],
    };
    this.handleDieSelect = this.handleDieSelect.bind(this);
    this.handleWordSubmit = this.handleWordSubmit.bind(this);
  }


  handleDieSelect(char, pos) {
    if (this.state.currentSelectionIndex.includes(pos)) {
      window.alert('You cannot select a die twice');
      return;
    } // alert if char already selected

    if (!this.state.validDice.includes(pos)) {
      window.alert('You can only click on dice that are adjacent to your last selected die');
      return;
    } // alert if char not in selectable list

    const newBoard = JSON.parse(JSON.stringify(this.state.board)); // deep copy board
    newBoard[pos].selected = true; // mark the selected char as 'selected' for css class assignment

    const newCurrentSelectionIndex = this.state.currentSelectionIndex.slice(); // clone current selections array
    newCurrentSelectionIndex.push(pos); // push new selection into selections

    this.setState({
      board: newBoard,
      currentSelection: this.state.currentSelection + char,
      currentSelectionIndex: newCurrentSelectionIndex,
      validDice: validDice[pos],
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
      validDice: validDice[25], // all dice becomes selectable
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
