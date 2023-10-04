import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import HotelDetails from "./pages/HotelDetails";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="main-container">
                <Routes>
                    <Route index element={<Homepage />} />
                    <Route path="/property/:id" element={<HotelDetails />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
