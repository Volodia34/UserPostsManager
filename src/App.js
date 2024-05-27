import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Users from "./components/Users";

function App() {
  return (
        <Router>
          <div>
            <Routes>
              <Route path="/" exact component={Users} />
            </Routes>
          </div>
        </Router>
  );
}

export default App;
