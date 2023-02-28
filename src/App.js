import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from '../src/components/Products';


function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Products" element={<Products />}/>
        </Routes>
      </Router>
    </div>
    );
}

export default App;
