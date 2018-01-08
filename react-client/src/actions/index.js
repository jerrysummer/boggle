export const HANDLE_DIE_SELECT = 'handle_die_select';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';

export function handleDieUnselect() {
  return {
    type: FETCH_POSTS,
    payload: request,
  };
}

export function handleDieSelect(char, pos) {
  console.log(char, pos);

  return {
    type: HANDLE_DIE_SELECT,
    payload: [char, pos],
  };
}

