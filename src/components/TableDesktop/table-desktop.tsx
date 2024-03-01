import Trash from "../../assets/img/Trash.png"
import Edit from "../../assets/img/Edit.png"
import { Products, useDeleteProduct } from "../../hooks/products-hooks";
import { formatPriceBR } from "../../utils/format-price-br";
import { Container, Icon } from "./style";

export default function TableDesktop({ products }: Readonly<TableProps>) {
    const { mutate: deleteProduct } = useDeleteProduct()

    function handleDeleteProduct(id: string, name: string) {
        const confirm = window.confirm(`Você tem certeza que deseja deletar o investimento ${name}?`)
        if (confirm) {
            console.log(confirm)

           return deleteProduct(id)
        }
    }



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
                            <td>{formatPriceBR(price)}</td>
                            <td >{category}</td>
                            <td >{description}</td>
                            <td ><Icon src={Edit} /></td>
                            <td ><Icon onClick={() => handleDeleteProduct(id, name)} src={Trash} /></td>
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