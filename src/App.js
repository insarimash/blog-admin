/* eslint-disable jsx a11y/anchor-is-valid */
import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom'
// import EditPost from "./pages/posts/EditPost";
// import NewPost from "./pages/posts/NewPost";
import Posts from "./pages/posts/Posts";
import EditPost from "./pages/posts/EditPost";
import NewPost from "./pages/posts/NewPost";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

function App() {
  const token = localStorage.getItem('token');

  if(!token){
    if(true){
      return(
        <BrowserRouter>
          <Routes>
            <Route index element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
          </Routes>
        </BrowserRouter>
      )
    }
    
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.replace('/login');
  }

  return (
    <BrowserRouter>
      <div className="ui container" style={{margin: "10px"}}>
        <div className="ui menu">
          <div className="header item">
            Blog Admin
          </div>
          <div className="right menu">
            <a className="ui item" onClick={handleLogout}>
              Logout
            </a>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/posts">
            <Route index element={<Posts />} />
            <Route path=":id" element={<EditPost />} />
            <Route path="new" element={<NewPost />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App