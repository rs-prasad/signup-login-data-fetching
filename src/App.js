import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import SignUp from "./pages/sign_up/SignUp";
import Login from "./pages/log_in/Login";
import LoggedIn from "./pages/logged-in/LoggedIn";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logged-in" element={<LoggedIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
