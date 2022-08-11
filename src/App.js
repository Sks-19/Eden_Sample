import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Page1 />} />
      <Route path="/second" element={<Page2 />} />
      <Route path="/third" element={<Page3 />} />
      <Route path="/fourth" element={<Page4 />} />
    </Routes>
  </Router>
  );
}

export default App;
