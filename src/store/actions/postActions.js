import axios from 'axios';

export const fetchPost = (postId) => async (dispatch) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    dispatch({ type: 'FETCH_POST', payload: response.data });
};

export const fetchComments = (postId) => async (dispatch) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    dispatch({ type: 'FETCH_COMMENTS', payload: response.data });
};

export const updatePost = (postId, post) => async (dispatch) => {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, post);
    dispatch({ type: 'UPDATE_POST', payload: response.data });
};

export const deletePost = (postId) => async (dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    dispatch({ type: 'DELETE_POST', payload: postId });
};
