// PostForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost, updatePost } from '../../actions/postsActions';

const PostForm = ({ userId, postId }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const postData = {
            userId,
            title,
            body,
        };
        if (postId) {
            dispatch(updatePost(postId, postData));
        } else {
            dispatch(addPost(postData));
        }
        setTitle('');
        setBody('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <label>Body:</label>
            <textarea value={body} onChange={(e) => setBody(e.target.value)} required />
            <button type="submit">{postId ? 'Update Post' : 'Add Post'}</button>
        </form>
    );
};

export default PostForm;
