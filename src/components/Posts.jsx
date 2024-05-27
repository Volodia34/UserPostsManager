import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, addPost } from '../actions/postsActions';
import { Link, useParams } from 'react-router-dom';

const Posts = () => {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);

    useEffect(() => {
        dispatch(fetchPosts(userId));
    }, [dispatch, userId]);

    const handleAddPost = () => {
        const newPost = {
            userId,
            title: 'New Post',
            body: 'This is a new post.',
        };
        dispatch(addPost(newPost));
    };

    return (
        <div>
            <h1>Posts</h1>
            <button onClick={handleAddPost}>Add New</button>
            <table>
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
                                <button>Details</button>
                            </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Posts;
