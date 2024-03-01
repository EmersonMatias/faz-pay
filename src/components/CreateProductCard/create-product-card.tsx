import { useForm } from "react-hook-form";
import InputForm from "../Input-Form/input-form";
import { FormContainer, Form } from "../ui/form";
import { Container, ExitIcon } from "./styled";
import { Button } from "../ui/button";
import Exit from "../../assets/img/Exit.png"
import { Product, useCreateProduct } from "../../hooks/products-hooks";

export default function CreateProductCard({ setModalOpen }: CreateProductCardProps) {
    const { register, formState: { errors }, handleSubmit, reset } = useForm<ProductForm>()
    const { mutate: createProduct } = useCreateProduct(reset)

    function onSubmitProductsForm(productForm: ProductForm) {
        const price = Number(productForm.price)
        const product: Product = { ...productForm, price }

        createProduct(product)
    }

    return (
        <Container>
            <FormContainer>
                <ExitIcon src={Exit} onClick={() => setModalOpen(false)} />

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

                    <Button>Criar investimento</Button>
                </Form>
            </FormContainer>
        </Container>
    )
}


interface CreateProductCardProps {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}


export interface ProductForm {
    name: string,
    price: string,
    category: string,
    description: string
}