import React from 'react';
import { connect } from 'react-redux';

import DiceGrid from '../components/DiceGrid.jsx';
import CurrentWord from '../components/CurrentWord.jsx';
import ScoreBoard from '../components/ScoreBoard.jsx';
import logo from '../../dist/logo.png';


/* eslint-disable */

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     board,
  //     currentSelection: '',
  //     currentSelectionIndex: [],
  //     pastSelection: [],
  //     validDice: validDice[25],
  //   };
  //     this.handleDieSelect = this.handleDieSelect.bind(this);
  //     this.handleDieUnselect = this.handleDieUnselect.bind(this);
  //     this.handleWordSubmit = this.handleWordSubmit.bind(this);
  // }

  render() {
    return (
      <div className="container">
        <img src={logo} alt="boggle logo" />
        <DiceGrid />
        <CurrentWord />
        <ScoreBoard pastSelections={this.props.pastSelections}/>
      </div>
    );
  }

  // handleDieUnselect(pos) {
  //   const newBoard = JSON.parse(JSON.stringify(this.state.board)); // deep copy board
  //   newBoard[pos].selected = false; // mark the selected char as 'die' for css class assignment

  //   const newCurrentSelection = this.state.currentSelection.slice(0, -1); // clone current currentSelection string without last char

  //   const newCurrentSelectionIndex = this.state.currentSelectionIndex.slice(); // clone current selections array
  //   newCurrentSelectionIndex.pop(); // delete last item in array

  //   const wordLength = newCurrentSelectionIndex.length; // how many chars are selected currently

  //   const validDiceIndex = wordLength ? newCurrentSelectionIndex[wordLength - 1] : 25; // the index reference for validDice

  //   this.setState({
  //     board: newBoard,
  //     currentSelection: newCurrentSelection,
  //     currentSelectionIndex: newCurrentSelectionIndex,
  //     validDice: validDice[validDiceIndex],
  //   });
  // }


  // handleDieSelect(char, pos) {
  //   const prevSelectionIndex = this.state.currentSelectionIndex[this.state.currentSelectionIndex.length - 1];

  //   if (prevSelectionIndex === pos) {
  //     this.handleDieUnselect(pos);
  //     return;
  //   } // run unselect handler if selection is the prev selection

  //   if (this.state.currentSelectionIndex.includes(pos)) {
  //     return;
  //   } // return if char already selected

  //   if (!this.state.validDice.includes(pos)) {
  //     window.alert('You can only click on dice that are adjacent to your last selected die');
  //     return;
  //   } // alert if char not in selectable list

  //   const newBoard = JSON.parse(JSON.stringify(this.state.board)); // deep copy board
  //   newBoard[pos].selected = true; // mark the selected char as 'selected' for css class assignment

  //   const newCurrentSelectionIndex = this.state.currentSelectionIndex.slice(); // clone current selections array
  //   newCurrentSelectionIndex.push(pos); // push new selection into selections

  //   this.setState({
  //     board: newBoard,
  //     currentSelection: this.state.currentSelection + char,
  //     currentSelectionIndex: newCurrentSelectionIndex,
  //     validDice: validDice[pos],
  //   });
  // }

  // handleWordSubmit() {
  //   const currentSelection = this.state.currentSelection.slice(); // clone current selections
  //   const newPastSelection = this.state.pastSelection.slice().concat([currentSelection]); // add current selection to array of past selections

  //   if (currentSelection.length === 0) return; // error check empty selection

  //   const newBoard = JSON.parse(JSON.stringify(this.state.board)); // deep copy board
  //   newBoard.forEach((die) => { die.selected = false; }); // reset board, all dice != selected

  //   this.setState({
  //     board: newBoard,
  //     pastSelection: newPastSelection,
  //     currentSelection: '',
  //     currentSelectionIndex: [],
  //     validDice: validDice[25], // all dice becomes selectable
  //   });
  // }
}

function mapStateToProps({ pastSelections }) {
  return { pastSelections };
}

export default connect(mapStateToProps)(App);
