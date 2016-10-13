import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS'; 

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = "?key=kdjdjskd33dd";

const GET_POSTS_URL=`${ROOT_URL}/posts${API_KEY}`;

export function fetchPosts() {
  const request = axios.get(GET_POSTS_URL);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}