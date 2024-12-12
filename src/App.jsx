import "./App.css";
import Header from "./components/navBar/header";
import Sidebar from "./components/sideBar/sidebar";
function App() {
  return (
    <>
      <div className="header d-flex ">
        <Sidebar></Sidebar>
        <Header></Header>
      </div>

    </>
  );
}

export default App;
