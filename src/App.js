import './App.css';
import Navbar from './components/Navbar';
import AllUser from './pages/AllUser';
import AddUser from "./pages/AddUser"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import EditUser from './pages/EditUser';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all' element={<AllUser />} />
        <Route path='/add' element={<AddUser />} />
        <Route path='/edit/:id' element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
