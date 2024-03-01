import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

export function useGetAllProducts() {
    return useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const sucess: AxiosResponse<Products[]> = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/products`)
            return sucess.data
        }
    })
}


export interface Products {
    id: number,
    name: string,
    price: number,
    category: string,
    description: string
}