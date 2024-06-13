import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost, fetchComments, updatePost, deletePost } from '../../store/actions/postActions';
import { useParams, useNavigate } from 'react-router-dom';
import './Post.css';

const Post = () => {
    const { postId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const post = useSelector(state => state.post.post);
    const comments = useSelector(state => state.post.comments);

    useEffect(() => {
        dispatch(fetchPost(postId));
        dispatch(fetchComments(postId));
    }, [dispatch, postId]);

    useEffect(() => {
        setUpdatedPostTitle(post.title);
        setUpdatedPostBody(post.body);
    }, [post]);

    const [editMode, setEditMode] = useState(false);
    const [updatedPostTitle, setUpdatedPostTitle] = useState('');
    const [updatedPostBody, setUpdatedPostBody] = useState('');

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleUpdate = () => {
        const updatedPost = {
            ...post,
            title: updatedPostTitle,
            body: updatedPostBody
        };
        dispatch(updatePost(postId, updatedPost));
        setEditMode(false);
    };

    const handleDelete = () => {
        dispatch(deletePost(postId));
        navigate(`/users/${post.userId}/posts`);
    };

    return (
        <div className="post-container">
            {editMode ? (
                <div className="edit-form">
                    <h2>Edit Post</h2>
                    <input
                        type="text"
                        value={updatedPostTitle}
                        onChange={(e) => setUpdatedPostTitle(e.target.value)}
                    />
                    <textarea
                        value={updatedPostBody}
                        onChange={(e) => setUpdatedPostBody(e.target.value)}
                    />
                    <button onClick={handleUpdate}>Update</button>
                </div>
            ) : (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <h2>Comments</h2>
                    <ul>
                        {comments.map(comment => (
                            <li key={comment.id}>{comment.body}</li>
                        ))}
                    </ul>
                    <button className="edit-btn" onClick={handleEdit}>Edit</button>
                    <button className="delete-btn" onClick={handleDelete}>Delete</button>
                </>
            )}
        </div>
    );
};

export default Post;
