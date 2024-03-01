import Trash from "../../assets/img/Trash.png"
import Edit from "../../assets/img/Edit.png"
import { Products } from "../../hooks/products-hooks";
import { formatValue } from "../../utils/format-value";
import { Container, Icon } from "./style";

export default function TableDesktop({ products }: Readonly<TableProps>) {
    return (
        <Container>
            <table>

                <thead>
                    <tr>
                        <th >ID</th>
                        <th >NOME</th>
                        <th >PREÇO</th>
                        <th >CATEGORIA</th>
                        <th>DESCRIÇÃO</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {products?.map(({ id, name, price, description, category }) => {
                        return <tr key={id}>
                            <td> {id}</td>
                            <td>{name}</td>
                            <td>{formatValue(price)}</td>
                            <td >{category}</td>
                            <td >{description}</td>
                            <td ><Icon src={Edit}/></td>
                            <td ><Icon src={Trash}/></td>
                        </tr>
                    })}

                </tbody>

            </table>
        </Container>
    )
}


interface TableProps {
    products: Products[]
}