import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/index';
import AdminPage from './pages/admin'

function App() {
  return (
    <Router basename="ICTDepartmentPortal">
      <Routes> 
        <Route path="/" element={<Home/>} />
        <Route path="/Admin/*" element={<AdminPage/>} />
      </Routes>
    </Router>
  )
}

export default App;
