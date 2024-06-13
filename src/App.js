import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from './components/Users/Users';
import Posts from './components/Posts/Posts';
import Post from './components/Post/Post';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Users />} />
                <Route path="/users/:userId/posts" element={<Posts />} />
                <Route path="/post/:postId" element={<Post />} />
            </Routes>
        </Router>
    );
}

export default App;
