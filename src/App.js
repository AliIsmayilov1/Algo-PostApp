import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Aside from "./Aside";
import { useState } from "react";
import Posts from "./Posts";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import PostDetails from "./PostDetails";
import Users from "./Users";
import UserPosts from "./UserPosts";
import context from "./context";

function App() {
  let [isMenuCollapsed, setisMenuCollapsed] = useState(false);
  let [postUsers, setPostUsers] = useState([]);
  function ToggleMenu() {
    setisMenuCollapsed(!isMenuCollapsed);
  }

  return (
    <BrowserRouter>
      <context.Provider value={{
        postUsers,
        setPostUsers,
      }}>
        <div className="App">
          <Header toggle={ToggleMenu}></Header>
          <main className="container">
            <Aside collapsed={isMenuCollapsed}></Aside>
            <div className="routeHolder">
              <Routes>
                <Route path="/" element={<div>Home</div>}></Route>
                <Route path="/posts" element={<Posts />}></Route>
                <Route
                  path="/posts/:id"
                  element={<PostDetails></PostDetails>}
                ></Route>
                <Route
                  path="/users/:id"
                  element={<UserPosts></UserPosts>}
                ></Route>
                <Route path="*" element={<div>404 Page not found</div>}></Route>
                <Route path="/users" element={<Users></Users>}></Route>
              </Routes>
            </div>
          </main>
          <Footer></Footer>
        </div>
      </context.Provider>
    </BrowserRouter>
  );
}

export default App;
