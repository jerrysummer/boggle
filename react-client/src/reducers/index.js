import { combineReducers } from 'redux';
import DieSelect from '../helpers/dieSelectability';
import Board from './reducer_board';
import CurrentSelection from './reducer_currentSelection';

const rootReducer = combineReducers({
  board: Board,
  currentSelection: CurrentSelection,
});

export default rootReducer;
