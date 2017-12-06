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
      selectedWords: []
    }
  }

  componentDidMount() {

  }

  handleDieSelect(char,pos) {
    this.setState(
      {currentSelection: this.state.currentSelection + char}
    )
  }

  handleWordSubmit() {

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
        />
        <ScoreBoard 
          className="scoreboard" 
          words={this.state.selectedWords}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));