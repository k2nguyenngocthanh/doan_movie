/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./LoginPage/RegisterPage";
import HomePage from "./Pages/HomePage/HomePage";
import DetailPage from "./Pages/DetailPage/DetailPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import BookingPage from "./Pages/BookingPage/BookingPage";

function App() {
  return (
    <div className="bg-black text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/login"
            element={<Layout Component={LoginPage} />}
          ></Route>
          <Route
            path="/register"
            element={<Layout Component={RegisterPage} />}
          ></Route>
          <Route
            path="/detail/:id"
            element={<Layout Component={DetailPage} />}
          />
          <Route path="/booking" element={<Layout Component={BookingPage} />} />
          <Route path="*" element={<Layout Component={NotFoundPage} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
