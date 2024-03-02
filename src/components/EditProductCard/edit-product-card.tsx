import { useForm } from "react-hook-form";
import InputForm from "../Input-Form/input-form";
import { FormContainer, Form } from "../ui/form";
import { Container, ExitIcon } from "./styled";
import { Button } from "../ui/button";
import Exit from "../../assets/img/Exit.png"
import { Products, useUpdateProduct } from "../../hooks/products-hooks";
import { useEffect } from "react";
import { ProductForm, UpdateProductCardProps } from "../../types/type";

export default function EditProductCard({ setProduct, product }: UpdateProductCardProps) {
    const { register, formState: { errors }, setValue, handleSubmit, reset } = useForm<ProductForm>()
    const { mutate: updateProduct } = useUpdateProduct({ reset, setProduct })
    const id = product?.id

    useEffect(() => {
        if (product) {
            setValue("name", product?.name)
            setValue("price", `${product?.price}`)
            setValue("category", product?.category)
            setValue("description", product?.description)
        }
    }, [product, setValue])


    function onSubmitProductsForm(productForm: ProductForm) {
        const price = Number(productForm.price)
        const newProduct: Products = { ...productForm, price, id }

        updateProduct(newProduct)
    }

    return (
        <Container data-testid="edit-product-card">
            <FormContainer>
                <ExitIcon src={Exit} onClick={() =>    setProduct(null)} alt="Exit Icon" />

                <Form style={{ paddingTop: "48px" }} onSubmit={handleSubmit((e) => onSubmitProductsForm(e))}>

                    <InputForm
                        label="Nome do investimento"
                        name="name"
                        register={register}
                        type="text"
                        required="Digite o nome do investimento"
                        minLength={{
                            value: 3,
                            message: "Digite o nome do investimento"
                        }}
                        message={errors?.name?.message}
                    />
                    <InputForm
                        label="Preço"
                        name="price"
                        register={register}
                        type="text"
                        required="Digite o preço"
                        message={errors?.price?.message}
                        validate={(price) => {
                            const convertPrice = Number(price)
                            if (!convertPrice) return "Digite o preço usando o ponto como separador"
                        }}
                    />

                    <InputForm
                        label="Categoria do investimento"
                        name="category"
                        register={register}
                        type="text"
                        required="Digite a categoria do investimento"
                        minLength={{
                            value: 5,
                            message: "Digite a categoria do investimento"
                        }}
                        message={errors?.category?.message}
                    />

                    <InputForm
                        label="Descrição"
                        name="description"
                        register={register}
                        type="text"
                        required="Digite a descrição do investimento"
                        minLength={{
                            value: 10,
                            message: "Digite a descrição do investimento"
                        }}
                        message={errors?.description?.message}
                    />

                    <Button>Editar investimento</Button>
                </Form>
            </FormContainer>
        </Container>
    )
}


