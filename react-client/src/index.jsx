import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
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
      pastSelection: []
    }
    this.handleDieSelect = this.handleDieSelect.bind(this);
    this.handleWordSubmit = this.handleWordSubmit.bind(this);
  }


  handleDieSelect(char,pos) {
    if(this.state.currentSelectionIndex.includes(pos)) return; //check if char already selected
    let newBoard =  this.state.board.slice();
    newBoard[pos]['selected'] = true;
    let newCurrentSelectionIndex =  this.state.currentSelectionIndex.slice();
    newCurrentSelectionIndex.push(pos);

    this.setState(
      {
        currentSelection: this.state.currentSelection + char,
        currentSelectionIndex: newCurrentSelectionIndex
      }
    )
  }

  handleWordSubmit() {
    let currentSelection =  this.state.currentSelection.slice();
    let newPastSelection = this.state.pastSelection.slice().concat([currentSelection]);
    board.forEach(die => die.selected = false)
    this.setState(
      {
        pastSelection: newPastSelection,
        currentSelection: '',
        currentSelectionIndex: []
      }
    )
  }

  render () {
    return (
      <div className="container">
        <img src={logo} alt="boggle logo" />
        <DiceGrid 
          className="dicegrid" 
          board={this.state.board}
          handleDieSelect={this.handleDieSelect}
        />
        <CurrentWord 
          className="currentword" 
          currentSelection={this.state.currentSelection}
          handleWordSubmit={this.handleWordSubmit}
        />
        <ScoreBoard 
          className="scoreboard" 
          pastSelection={this.state.pastSelection}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));