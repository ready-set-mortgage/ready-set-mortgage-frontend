import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Form, Landing } from './Components';
import './App.css';

export default function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/apply" element={<Form />} />
      </Routes>
    </BrowserRouter>
  )
}
