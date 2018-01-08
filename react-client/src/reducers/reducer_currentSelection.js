import { HANDLE_DIE_SELECT } from '../actions/index';

export default function (state = [], action) {
  // console.log('reducer ', state, action.payload);
  switch (action.type) {
    case HANDLE_DIE_SELECT:
      return [...state, action.payload[0]];
    default:
      return state;
  }
}
