import DownArrow from "../../assets/svg/DownArrow.svg"
import { useState } from "react"
import { Products, useDeleteProduct } from "../../hooks/products-hooks"
import { formatPriceBR } from "../../utils/format-price-br"
import styled from "styled-components"
import Edit from '../../assets/img/Edit.png'
import Trash from '../../assets/img/Trash.png'
const Icon = styled.img`
width: 160px;
cursor: pointer;
`

interface TableLineProps {
    product: Products,
    setProduct: React.Dispatch<React.SetStateAction<Products | null>>
}

export default function TableLine({ setProduct,product }: Readonly<TableLineProps>) {
    const {category,description,id,name,price} = product

    const [details, setDetails] = useState(false)
    const { mutate: deleteProduct } = useDeleteProduct()

    function handleDeleteProduct(id: string, name: string) {
        const confirm = window.confirm(`Você tem certeza que deseja deletar o investimento ${name}?`)
        if (confirm) {
            console.log(confirm)

            return deleteProduct(id)
        }
    }

    return (
        <>
            <tr>
                <td>{name}</td>
                <td onClick={() => setDetails(!details)}><img src={DownArrow} alt="DownArrow Icon" /></td>
            </tr>
            {details && (
                <tr>
                    <td className="details-container" colSpan={3}>
                        <div className="details">
                            <h2>Preço</h2>
                            <h3>{formatPriceBR(price)}</h3>
                        </div>
                        <div className="details">
                            <h2>Categoria</h2>
                            <h3>{category}</h3>
                        </div>
                        <div className="details">
                            <h2>Descrição</h2>
                            <h3>{description}</h3>
                        </div>
                        <div className="details-buttons">
                            <Icon className="icon" src={Edit} onClick={() => setProduct(product)} alt={`Edit ${name}`} />
                            <Icon className="icon" onClick={() => handleDeleteProduct(id, name)} src={Trash} alt={`Delete ${name}`} />
                        </div>
                    </td>

                </tr>
            )
            }
        </>
    )
}