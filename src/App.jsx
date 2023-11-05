import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Dashboard, Landing } from './Components';
import './App.css';

export default function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Dashboard />
    </BrowserRouter>
  )
}
