import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { RegisterForm } from "../pages/Signup/signup";
import { UseFormReset } from "react-hook-form";

export function useRegisterUser(reset: UseFormReset<RegisterForm>) {
    return useMutation({
        mutationKey: ['register'],
        mutationFn: async (user: RegisterForm) => {
         
            const sucess = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users`, user)
            return sucess
        },
        onSuccess: () => {
            reset()
        }
    })
}