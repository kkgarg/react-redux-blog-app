import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';   
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = "?key=kdjdjskd33dd";

const POSTS_URL=`${ROOT_URL}/posts`;

export function fetchPosts() {
  const request = axios.get(`${POSTS_URL}${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}


export function createPost(props) {
  const request = axios.post(`${POSTS_URL}${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPost(id) {
  const request = axios.get(`${POSTS_URL}/${id}${API_KEY}`);
  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id) {
  const request = axios.delete(`${POSTS_URL}/${id}${API_KEY}`);
  return {
    type: DELETE_POST,
    payload: request
  };
}

