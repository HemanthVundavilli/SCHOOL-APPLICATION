import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import Gallery from './components/pages/Gallery';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Academics from './components/pages/Academic';
import FeesStructure from './components/pages/FeesStructure';
import Admissions from './components/pages/Admissions';
import Login from './components/pages/Login';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/fees-structure" element={<FeesStructure />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
