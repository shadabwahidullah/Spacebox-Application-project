import { Route, Routes } from 'react-router';
import Login from './components/Login';
import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/src/collapse';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <Navbar />
      </header>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
