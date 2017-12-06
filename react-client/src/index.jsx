import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import DiceGrid from './components/DiceGrid.jsx';
import CurrentWord from './components/CurrentWord.jsx';
import ScoreBoard from './components/ScoreBoard.jsx';
import logo from '../dist/logo.png'

import board from './helpers/diceRoller'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      board,
      currentSelection: '',
      pastSelection: []
    }
    this.handleDieSelect = this.handleDieSelect.bind(this);
    this.handleWordSubmit = this.handleWordSubmit.bind(this);
  }

  componentDidMount() {

  }

  handleDieSelect(char,pos) {
    this.setState(
      {
        currentSelection: this.state.currentSelection + char
      }
    )
  }

  handleWordSubmit() {
    let currentSelection =  this.state.currentSelection;
    let newPastSelection = this.state.pastSelection.concat([currentSelection]);
    this.setState(
      {
        pastSelection: newPastSelection,
        currentSelection: ''
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