import Cookies from "js-cookie"

function realodPage(){
    window.location.reload()
}

export default function Loggout() {
    Cookies.remove("email")
    realodPage()
} 

