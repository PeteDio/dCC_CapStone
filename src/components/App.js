import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar.jsx";
import Registration from "./Registration/Registration.jsx";
import Login from "./Login/Login.jsx";
import FormMeal from "./FormMeal/FormMeal.jsx";
import jwtDecode from "jwt-decode";
import Logout from "./logout/Logout.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import Profile from "./Profile/Profile.jsx";
import Search from "./Search/Search.jsx";
import EditProfile from "./EditProfile/EditProfile.jsx";
import HomePage from "./Homepage/HomePage";

export default function App() {
  const [user, setUser] = useState({});
  const [userLogin, setUserLogin] = useState([]);
  const [jwt, setJwt] = useState();
  const [loadData, setLoadData] = useState(false);
  const [comments, setComments] = useState([]);

  const getUserJWT = () => {
    const jwt = localStorage.getItem("token");
    try {
      const user = jwtDecode(jwt);
      setUser(user);
      console.log("get user jwt call", user);
    } catch {}
  };

  useEffect(() => {
    getUserJWT();
    getUserLogin();
    setLoadData(!loadData);
  }, []);

  const getUserLogin = async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/auth/login/", {
      headers: { Authorization: "Bearer " + jwt },
    });
    setUserLogin(response.data);
    console.log(response.data);
  };

  const loginUser = async (loginUser) => {
    let response = await axios.post(
      "http://127.0.0.1:8000/api/auth/login/",
      loginUser
    );
    localStorage.setItem("token", response.data.token);
    console.log("response axios call", response.data.token);
    setJwt(localStorage.getItem("token"));
  };

  const editProfile = async (userObject) => {
    const jwt = localStorage.getItem("token");
    let id = user.id;
    console.log(id);
    let response = await axios.put(
      `http://127.0.0.1:8000/api/auth/edit/${id}`,
      userObject,
      { headers: { Authorization: "Bearer " + jwt } }
    );
    setUser(response.data);
  };

  const getComments = async (id) => {
    console.log(id);
    try {
      let response = await axios.get(
        `http://127.0.0.1:8000/comments/mealid/${id}/`
      );
      console.log(response.data);
      setComments(response.data);
    } catch (error) {
      console.log("retrieving comments", error);
    }
  };

  const postComments = async (comment) => {
    const jwt = localStorage.getItem("token");
    console.log(comment);
    let response = await axios.post(
      "http://127.0.0.1:8000/comments/",
      comment,
      { headers: { Authorization: "Bearer " + jwt } }
    );
    console.log(response.data);
  };
  return (
    <div>
      {/* Header outside of the routes because of this verison of react dom */}
      <Navbar />
      <div className="sections">
        <BrowserRouter>
          <Routes>
            {/* Login Route */}
            <Route path="/" element={<Login loginUserCall={loginUser} />} />
            {/* HomePage Route */}
            <Route
              path="/home"
              element={
                <HomePage
                  user={user}
                  postComments={postComments}
                  getComments={getComments}
                  comments={comments}
                />
              }
            />
            {/* Regristration page */}
            <Route path="/registration" element={<Registration />} />
            {/* Profile */}
            <Route path="/Profile" element={<Profile user={user} />} />
            {/* Logout */}
            <Route path="/logout" element={<Logout />} />
            {/* Edit Profile */}
            <Route
              path="/editprofile"
              element={<EditProfile edit={user} editCall={editProfile} />}
            />
            {/* Search */}
            <Route path="/search" element={<Search user={user} />} />
            {/* FormMeal */}
            <Route path="/search/formmeal" element={<FormMeal />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
