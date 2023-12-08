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
import { Stepper, initTE } from "tw-elements";
import PayPage from "./Pages/PayPage/PayPage";
initTE({ Stepper });

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
          <Route
            path="/detail/:id/booking"
            element={<Layout Component={BookingPage} />}
          />
          <Route
            path="/detail/:id/booking/pay"
            element={<Layout Component={PayPage} />}
          />
          <Route path="*" element={<Layout Component={NotFoundPage} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
