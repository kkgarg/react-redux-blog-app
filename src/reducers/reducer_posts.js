import { FETCH_POSTS } from '../actions/index';
import { FETCH_POST } from '../actions/index';

const INITIAL_STATE = {
  all: [],
  post: null
};

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return { ...state, all: action.payload.data }; 
    case FETCH_POST:
      console.log("Fetching single post");
      const new_state = {...state, post: action.payload.data};
      console.log(new_state);
      return new_state;
  }
  return state;
}