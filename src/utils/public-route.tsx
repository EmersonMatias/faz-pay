import Cookies from "js-cookie"
import { Outlet, Navigate } from "react-router-dom"

export function PublicRoute() {
    const isLogged = Cookies.get("email")
    console.log(isLogged)

    return (
        isLogged ? <Navigate to={"/home"} /> : <Outlet />
    )
}