import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Login from "../pages/Login/login";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Login />}>

        </Route>
    )
)