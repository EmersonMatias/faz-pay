import { TableProps } from "../TableDesktop/table-desktop"
import TableLine from "../TableLine/table-line"
import { Container } from "./styled"

export default function TableMobile({ products }: Readonly<TableProps>) {
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
                        return (<TableLine key={product.id}  {...product}/>)
                    })}
                </tbody>
            </table>
        </Container>
    )
}

