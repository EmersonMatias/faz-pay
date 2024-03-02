import { useMutation } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { RegisterForm } from "../pages/Register/register";
import { UseFormReset } from "react-hook-form";
import { LoginForm } from "../pages/Login/login";
import { BACKEND_URL } from "../utils/backend.-url";

export function useRegisterUser(reset: UseFormReset<RegisterForm>) {
    return useMutation({
        mutationKey: ['register'],
        mutationFn: async (user: RegisterForm) => {

            const sucess = await axios.post(`${BACKEND_URL}/users`, user)
            return sucess
        },
        onSuccess: () => {
            reset()
        }
    })
}

export function useLoginUser() {
    return useMutation({
        mutationKey: ['login'],
        mutationFn: async ({ email, password }: LoginForm) => {
            const sucess: AxiosResponse<LoginForm[]> = await axios.get(`${BACKEND_URL}/users?email=${email}&password=${password}`)
            return sucess.data
        }
    })
}

