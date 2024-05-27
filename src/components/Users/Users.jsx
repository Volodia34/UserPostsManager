import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../actions/userActions';
import { Link } from 'react-router-dom';
import './Users.css'; // Це ваш файл стилів

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);


    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div className="users-container">
            <h1>Users</h1>
            <table className="users-table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link to={`/posts/${user.id}`}>
                                <button className="user-posts-btn">Posts</button>
                            </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
