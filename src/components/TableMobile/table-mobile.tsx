import { useState } from "react"
import EditProductCard from "../EditProductCard/edit-product-card"
import { TableProps } from "../TableDesktop/table-desktop"
import TableLine from "../TableLine/table-line"
import { Container } from "./styled"
import { Products } from "../../hooks/products-hooks"

export default function TableMobile({ products }: Readonly<TableProps>) {
    const [product, setProduct] = useState<Products | null>(null)

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th >NOME</th>
                        <th >●</th>
                    </tr>
                </thead>

                <tbody>
                    {products?.map((product) => {
                        return (<TableLine setProduct={setProduct} key={product.id} product={product} />)
                    })}
                </tbody>
            </table>

            {
                product &&
                <EditProductCard
                    product={product}
                    setProduct={setProduct}
                />
            }

        </Container>
    )
}

