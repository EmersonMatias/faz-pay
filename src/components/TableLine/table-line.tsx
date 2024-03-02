import DownArrow from "../../assets/svg/DownArrow.svg"
import { useState } from "react"
import { Products } from "../../hooks/products-hooks"
import { formatPriceBR } from "../../utils/format-price-br"

export default function TableLine({ name,category,price,description }: Readonly<Products>) {
    const [details, setDetails] = useState(false)

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
                    </td>
                </tr>
            )
            }
        </>
    )
}