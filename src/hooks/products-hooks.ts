import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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

export function useDeleteProduct() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationKey: ["products"],
        mutationFn: async (id: string) => {            
            await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/products/${id}`)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] })
        }
    })
}


export interface Products {
    id: string,
    name: string,
    price: number,
    category: string,
    description: string
}