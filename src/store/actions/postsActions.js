import axios from 'axios';

export const fetchPosts = (userId) => async (dispatch) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const addPost = (post) => async (dispatch) => {
    if (post.title && post.body) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', post);
        dispatch({ type: 'ADD_POST', payload: response.data });
    }
};
