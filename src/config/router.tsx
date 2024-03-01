import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Login from "../pages/Login/login";
import Signup from "../pages/Register/register";
import Home from "../pages/Home/home";
import { PrivateRoute } from "../utils/private-route";
import { PublicRoute } from "../utils/public-route";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route element={<PublicRoute />}>
                <Route path="/" element={<Login />} />
                <Route path="register" element={<Signup />} />
            </Route>

            <Route element={<PrivateRoute />}>
                <Route path="home" element={<Home />} />
            </Route>

        </Route>
    )
)