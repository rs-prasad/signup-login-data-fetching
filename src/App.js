import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import SignUp from "./pages/sign_up/SignUp";
import Login from "./pages/log_in/Login";
import LoggedIn from "./pages/logged-in/LoggedIn";
import FetchNormal from "./pages/fetch/FetchNormal";
import FetchWithAuth from "./pages/fetch/FetchWithAuth";
import Error from "./pages/error/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logged-in" element={<LoggedIn />} />
          <Route path="/fetch-normal" element={<FetchNormal />} />
          <Route path="/fetch-with-auth" element={<FetchWithAuth />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
