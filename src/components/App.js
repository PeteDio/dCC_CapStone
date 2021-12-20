import './App.scss';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Navbar/Navbar.jsx';
import Registration from './Registration/Registration.jsx'
import Login from './Login/Login.jsx';
import MealForm from './MealForm/MealForm.jsx';
import jwtDecode from 'jwt-decode'
import Logout from './logout/Logout.jsx'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Profile from './Profile/Profile.jsx'
import Search from './Search/Search.jsx'
import EditProfile from './EditProfile/EditProfile.jsx';
import HomePage from './Homepage/HomePage';


export default function App() {

  const [user, setUser] = useState({})
  const [userLogin, setUserLogin] = useState([])
  const [jwt, setJwt] = useState()
  const [loadData, setLoadData] = useState(false)

  const getUserJWT = () => {
      const jwt = localStorage.getItem('token');
      try {
        const user = jwtDecode(jwt);
        setUser(user)
        console.log("get user jwt call", user)
      } catch {
      }
    }
  
    useEffect(() =>{
      getUserJWT();
      getUserLogin();
      setLoadData(!loadData)   
    },[])

    const getUserLogin = async () => {
      const response = await axios.get('http://127.0.0.1:8000/api/auth/login/', { headers: {Authorization: 'Bearer ' + jwt}});
      setUserLogin(response.data);
      console.log(response.data)
    }

    const loginUser = async (loginUser) => {
      let response= await axios.post('http://127.0.0.1:8000/api/auth/login/', loginUser);
      localStorage.setItem('token', response.data.token);
      console.log("response axios call", response.data.token)
      setJwt(localStorage.getItem('token'));
    }

    const editProfile = async (userObject) => {
      const jwt = localStorage.getItem('token')
      let id = user.id
      console.log(id)
      let response = await axios.put(`http://127.0.0.1:8000/api/auth/edit/${id}`, userObject, {headers:{Authorization:'Bearer ' + jwt}})
      setUser(response.data)
  }
  


  return (
    <div>
          {/* Header outside of the routes because of this verison of react dom */}
          <Navbar/>
          <div className='sections'>
          <BrowserRouter>
              <Routes>
                    {/* Login Route */}
                    <Route path="/" element={<Login loginUserCall={loginUser}/>} />
                    {/* HomePage Route */}
                    <Route path="/home" element={<HomePage user={user}/>} />      
                    {/* Regristration page */}
                    <Route path="/registration" element={<Registration/>} />
                    {/* Profile */}
                    <Route path="/Profile" element={<Profile user={user}/>} />
                    {/* Logout */}
                    <Route path='/logout' element={<Logout/>}/>
                    {/* Edit Profile */}
                    <Route path="/editprofile" element={<EditProfile edit={user} editCall={editProfile}/>} />
                    {/* Search */}
                    <Route path="/search" element={<Search/>} />
                    {/* MealForm */}
                    <Route path="/search/mealform" element={<MealForm/>} />
              </Routes>
          </BrowserRouter>
            </div>
            </div>
  );
}

