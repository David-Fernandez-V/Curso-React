import logo from './logo.svg';
import './App.css';
//import Welcome from './components/Welcome';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Contact from './pages/Contatc';
import Profile from './pages/Profile';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/contact"> Contact </Link>
              </li>
              <li>
                <Link to="/profile"> Profile </Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path="/contact" element={<Contact/>} />
            <Route path="/profile/:name" element={<Profile/>}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
