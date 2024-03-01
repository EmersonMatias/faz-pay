import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { UseFormReset } from "react-hook-form";
import { ProductForm } from "../components/CreateProductCard/create-product-card";

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

export function useUpdateProduct() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationKey: ["products"],
        mutationFn: async ({ id, product }: { id: string, product: Product }) => {
            await axios.put(`${import.meta.env.VITE_BACKEND_URL}/products/${id}`, product)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] })
        }
    })
}

export function useCreateProduct(reset: UseFormReset<ProductForm>) {
    const queryClient = useQueryClient()

    return useMutation({
        mutationKey: ["products"],
        mutationFn: async (product: Product) => {
            await axios.post(`${import.meta.env.VITE_BACKEND_URL}/products`, product)
        },
        onSuccess: () => {
            reset()
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

export interface Product extends Omit<Products,'id'>{}
