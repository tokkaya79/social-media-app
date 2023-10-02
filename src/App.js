import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

import "./style.scss";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route
                        path="/social-media-app"
                        element={<Home />}
                    />
                    <Route
                        path="/social-media-app/profile"
                        element={<Profile />}
                    />
                    <Route
                        path="/social-media-app/login"
                        element={<Login />}
                    />
                    <Route
                        path="/social-media-app/register"
                        element={<Register />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
