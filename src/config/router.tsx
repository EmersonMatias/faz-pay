import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Login from "../pages/Login/login";
import Signup from "../pages/Signup/signup";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route  path="/" element={<Login />}/>
            <Route path="register" element={<Signup />} />
        </Route>
    )
)