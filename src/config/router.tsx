import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Login from "../pages/Login/login";
import Signup from "../pages/Register/register";
import Home from "../pages/Home/home";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Login />} />
            <Route path="register" element={<Signup />} />
            <Route path="home" element={<Home />} />
        </Route>
    )
)