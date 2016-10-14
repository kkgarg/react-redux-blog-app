import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';  

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = "?key=kdjdjskd33dd";

const POSTS_URL=`${ROOT_URL}/posts${API_KEY}`;

export function fetchPosts() {
  const request = axios.get(POSTS_URL);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}


export function createPost(props) {
  const reqeust = axios.post(POSTS_URL, props);

  return {
    type: CREATE_POST,
    payload: request
  }
}
