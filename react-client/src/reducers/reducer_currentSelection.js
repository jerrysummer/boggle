import { HANDLE_DIE_SELECT, HANDLE_WORD_SUBMIT } from '../actions/index';

export default function (state = [], action) {
  // console.log('reducer ', state, action.payload);
  switch (action.type) {
    case HANDLE_DIE_SELECT:
      return [...state, action.payload[0]];
    case HANDLE_WORD_SUBMIT:
      return [];
    default:
      return state;
  }
}
