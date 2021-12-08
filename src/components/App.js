import './App.scss';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Navbar/Navbar';
import Login from './Login/Login.jsx';
import HomePage from '../components/MealPost/MealPost.jsx';

export default function App() {
  return (
    <div>
          {/* Navbar outside of the routes because of this verison of react dom */}
          <Navbar/>
          <div className='sections'>
            <BrowserRouter>
              <Routes>
                    {/* Login Route */}
                    <Route path="/" element={<Login/>}/>
                    {/* HomePage Route */}
                    <Route path="/home" element={<HomePage/>}/>      
              </Routes>
            </BrowserRouter>
            </div>
            </div>
  );
}