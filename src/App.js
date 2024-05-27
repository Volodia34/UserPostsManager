// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Users from './components/Users/Users';
import Posts from './components/Posts/Posts';
import Post from './components/Post/Post';

function App() {
    return (
        <Routes>
            <Route path="/" exact element={<Users />} />
            <Route path="/posts/:userId" element={<Posts />} />
            <Route path="/post/:postId" element={<Post />} />
        </Routes>
    );
}

export default App;
