import { useForm } from "react-hook-form";
import InputForm from "../Input-Form/input-form";
import { FormContainer, Form } from "../ui/form";
import { Container, ExitIcon } from "./styled";
import { Button } from "../ui/button";
import Exit from "../../assets/img/Exit.png"
import { useCreateProduct } from "../../hooks/products-hooks";
import { CreateProductCardProps, ProductForm } from "../../types/type";
import OnSubmitProductsForm from "./functions/on-submit-products-form";

export default function CreateProductCard({ setCreateProductCardOpen }: CreateProductCardProps) {
    const { register, formState: { errors }, handleSubmit, reset } = useForm<ProductForm>()
    const { mutate: createProduct } = useCreateProduct(reset)

    return (
        <Container>
            <FormContainer>
                <ExitIcon src={Exit} onClick={() => setCreateProductCardOpen(false)} alt="ExitIcon" />

                <Form data-testid="teste" style={{ paddingTop: "48px" }} onSubmit={handleSubmit((e) => OnSubmitProductsForm(e, createProduct))}>

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


