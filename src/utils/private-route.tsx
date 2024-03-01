import Cookies from "js-cookie"
import { Outlet, Navigate } from "react-router-dom"

export function PrivateRoute() {
    const isLogged = Cookies.get("email")

    return (
        isLogged ? <Outlet /> : <Navigate to={"/"} />
    )
}