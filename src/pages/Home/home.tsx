import { useState } from "react";
import CreateProductCard from "../../components/CreateProductCard/create-product-card";
import Header from "../../components/Header/header";
import TableDesktop from "../../components/TableDesktop/table-desktop";
import { useGetAllProducts } from "../../hooks/products-hooks";
import { Container, TitleContainer } from "./styled";
import { CreateProductButton } from "../../components/ui/button";

export default function Home() {
    const { data: products, isSuccess } = useGetAllProducts()
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <Container>
            <Header />

            <TitleContainer>
                <h1>Investimentos</h1>

                <CreateProductButton onClick={() => setModalOpen(true)}>Criar Investimento</CreateProductButton>
            </TitleContainer>



            {isSuccess && <TableDesktop products={products} />}
            {modalOpen && <CreateProductCard setModalOpen={setModalOpen} />}
        </Container>
    )
}