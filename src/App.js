import { Route, Routes } from 'react-router';
import Login from './components/Login';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/src/collapse';
import NewRepo from './components/newRepo';

function App() {
  return (
    <div className="container">
      <header className="App-header" />
      <Navbar />
      <Routes>
        <Route path="/" exact="true" element={<Home />} />
        <Route path="/add-new-repo" exact="true" element={<NewRepo />} />
        <Route path="/login" exact="true" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
