import { Route, Routes } from 'react-router';
import Login from './components/Login';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
