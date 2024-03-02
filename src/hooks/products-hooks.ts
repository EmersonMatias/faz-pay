import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { UseFormReset } from "react-hook-form";
import { ProductForm } from "../types/type";
import { BACKEND_URL } from "../utils/backend.-url";

export function useGetAllProducts() {
    return useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const sucess: AxiosResponse<Products[]> = await axios.get(`${BACKEND_URL}/products`)
            return sucess.data
        }
    })
}

export function useGetOneProduct(id: string) {
    return useQuery({
        queryKey: ["product", `${id}`],
        queryFn: async () => {
            const sucess: AxiosResponse<Products> = await axios.get(`${BACKEND_URL}/products/${id}`)
            return sucess.data
        }
    })
}

export function useDeleteProduct() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationKey: ["products"],
        mutationFn: async (id: string) => {
            await axios.delete(`${BACKEND_URL}/products/${id}`)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] })
        }
    })
}

export function useUpdateProduct({ reset, setProduct }: useUpdateProductProps) {
    const queryClient = useQueryClient()

    return useMutation({
        mutationKey: ["products"],
        mutationFn: async (product: Products) => {
            await axios.put(`${BACKEND_URL}/products/${product.id}`, product)
        },
        onSuccess: () => {
            reset()
            setProduct(null)
            queryClient.invalidateQueries({ queryKey: ["products"] })
        }
    })
}

export function useCreateProduct(reset: UseFormReset<ProductForm>) {
    const queryClient = useQueryClient()

    return useMutation({
        mutationKey: ["products"],
        mutationFn: async (product: Product) => {
            await axios.post(`${BACKEND_URL}/products`, product)
        },
        onSuccess: () => {
            reset()
            queryClient.invalidateQueries({ queryKey: ["products"] })
        }
    })
}


export interface useUpdateProductProps {
    reset: UseFormReset<ProductForm>,
    setProduct: React.Dispatch<React.SetStateAction<Products | null>>
}

export interface Products {
    id: string,
    name: string,
    price: number,
    category: string,
    description: string
}

export interface Product extends Omit<Products, 'id'> { }
