import { UseMutateFunction } from "@tanstack/react-query"
import { Product } from "../../../hooks/products-hooks"
import { ProductForm } from "../../../types/type"

export default function OnSubmitProductsForm(productForm: ProductForm, createProduct: UseMutateFunction<void, Error, Product, unknown>) {
    const price = Number(productForm.price)
    const product: Product = { ...productForm, price }

    createProduct(product)
}
