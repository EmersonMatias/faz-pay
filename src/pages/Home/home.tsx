import Header from "../../components/Header/header";
import TableDesktop from "../../components/TableDesktop/table-desktop";
import { useGetAllProducts } from "../../hooks/products-hooks";
import { Container, TitleContainer } from "./styled";

export default function Home() {
    const { data: products, isSuccess } = useGetAllProducts()

    return (
        <Container>
            <Header />

            <TitleContainer>
                <h1>
                    Investimentos
                </h1>

               
            </TitleContainer>
            {isSuccess && <TableDesktop products={products} />}

        </Container>
    )
}