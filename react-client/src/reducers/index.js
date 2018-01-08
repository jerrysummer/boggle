import { combineReducers } from 'redux';
import DieSelect from '../helpers/dieSelectability';
import Board from './reducer_board';
import CurrentSelection from './reducer_currentSelection';
import PastSelections from './reducer_pastSelection';

const rootReducer = combineReducers({
  board: Board,
  currentSelection: CurrentSelection,
  pastSelections: PastSelections,
});

export default rootReducer;
