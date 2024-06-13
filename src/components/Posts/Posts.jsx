import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, addPost } from '../../store/actions/postsActions';
import { Link, useParams } from 'react-router-dom';
import './Posts.css';

const Posts = () => {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);

    useEffect(() => {
        dispatch(fetchPosts(userId));
    }, [dispatch, userId]);

    const [showNewPostForm, setShowNewPostForm] = useState(false);
    const [newPostTitle, setNewPostTitle] = useState('');
    const [newPostBody, setNewPostBody] = useState('');

    const handleAddPost = () => {
        if (newPostTitle && newPostBody) {
            const newPost = {
                userId,
                title: newPostTitle,
                body: newPostBody
            };
            dispatch(addPost(newPost));

            setShowNewPostForm(false);
            setNewPostTitle('');
            setNewPostBody('');
        }
    };

    return (
        <div className="posts-container">
            <h1>Posts</h1>
            <button className="add-new-btn" onClick={() => setShowNewPostForm(true)}>Add New</button>
            <table className="posts-table">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {posts.map(post => (
                    <tr key={post.id}>
                        <td>{post.title}</td>
                        <td>
                            <Link to={`/post/${post.id}`}>
                                <button className="post-details-btn">Details</button>
                            </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {showNewPostForm && (
                <div className="new-post-form">
                    <h2>Create New Post</h2>
                    <input
                        type="text"
                        placeholder="Title"
                        value={newPostTitle}
                        onChange={(e) => setNewPostTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Body"
                        value={newPostBody}
                        onChange={(e) => setNewPostBody(e.target.value)}
                    />
                    <button onClick={handleAddPost}>Submit</button>
                </div>
            )}
        </div>
    );
};

export default Posts;
