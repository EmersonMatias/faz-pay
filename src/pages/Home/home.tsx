import { useState } from "react";
import CreateProductCard from "../../components/CreateProductCard/create-product-card";
import Header from "../../components/Header/header";
import TableDesktop from "../../components/TableDesktop/table-desktop";
import { useGetAllProducts } from "../../hooks/products-hooks";
import { Container, TitleContainer } from "./styled";
import { CreateProductButton } from "../../components/ui/button";
import TableMobile from "../../components/TableMobile/table-mobile";

export default function Home() {
    const { data: products, isSuccess } = useGetAllProducts()
    const [createProductCardOpen, setCreateProductCardOpen] = useState(false)

    return (
        <Container>
            <Header />

            <TitleContainer>
                <h1 data-testid="title">Investimentos</h1>

                <CreateProductButton data-testid="create-investiment" onClick={() => setCreateProductCardOpen(true)}>Criar Investimento</CreateProductButton>
            </TitleContainer>


            {isSuccess ? <TableMobile products={products} /> : null}
            {isSuccess && <TableDesktop products={products} />}
        

            {createProductCardOpen && <CreateProductCard setCreateProductCardOpen={setCreateProductCardOpen} />}


        </Container>
    )
}