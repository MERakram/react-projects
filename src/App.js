
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./components/LoginPage";
import AddUsers from "./components/AddUsers";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/form" element={<AddUsers />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
