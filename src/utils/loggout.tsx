import Cookies from "js-cookie"

export default function Loggout() {
    Cookies.remove("email")
    window.location.reload()
} 