import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from '../src/components/Products';
import ContactUs from '../src/components/ContactUs';


function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Products" element={<Products />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
    );
}

export default App;
