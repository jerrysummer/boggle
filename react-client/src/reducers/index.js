import { combineReducers } from 'redux';
import DieSelect from '../helpers/dieSelectability';
import Board from './reducer_board';

const rootReducer = combineReducers({
  board: Board,
});

export default rootReducer;
