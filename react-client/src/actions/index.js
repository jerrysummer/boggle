export const HANDLE_DIE_SELECT = 'handle_die_select';
export const HANDLE_WORD_SELECT = 'handle_word_select';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';

export function handleDieUnselect() {
  return {
    type: FETCH_POSTS,
    payload: request,
  };
}

export function handleDieSelect(char, pos) {
  return {
    type: HANDLE_DIE_SELECT,
    payload: [char, pos],
  };
}

export function handleWordSubmit(word) {
  return {
    type: HANDLE_WORD_SELECT,
    payload: word,
  };
}
