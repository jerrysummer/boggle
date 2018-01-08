import { HANDLE_WORD_SUBMIT } from '../actions/index';

export default function (state = [], action) {
  // console.log('reducer ', state, action.payload);
  switch (action.type) {
    case HANDLE_WORD_SUBMIT:
      return [...state, action.payload];
    default:
      return state;
  }
}
