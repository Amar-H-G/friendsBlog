import "./App.css";
import Header from "./components/navBar/header";
import Sidebar from "./components/sideBar/sidebar";
import Home from "./components/Home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./components/Add/add";
function App() {
  return (
    <>
        <div className="header d-flex ">
          <Sidebar></Sidebar>
          <div className="container-body">
            <Header></Header>
            <div className="body">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<Add />} />
              </Routes>
            </div>
          </div>
        </div>
    </>
  );
}

export default App;
