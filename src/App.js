import './App.css';
import { Router } from './RouterFiles/Router';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './Componnents/Navbar/Navbar';
function App() {



return (
    <BrowserRouter>
    <Navbar/>
      <Router/>
  </BrowserRouter>
  );
}

export default App;
