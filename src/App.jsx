import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
