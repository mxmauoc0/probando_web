import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AboutUs from './pages/AboutUs/AboutUs';
import Landing from './pages/Landing/Landing';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Navigate to="/about" />} /> */}
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUs />} />
      
      </Routes>
    </BrowserRouter>
  );
}