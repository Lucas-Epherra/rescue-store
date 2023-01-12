import { useEffect, useState } from "react"
import { pedirItemPorId } from '../../helpers/leerMock'
import ItemDetail from "../itemDetail/itemDetail"


const ItemDetailContainer = ({ itemId }) => {

    const [item, setItem] = useState(null)
    console.log(item)

    useEffect(() => {
        pedirItemPorId(itemId)
            .then((data) => {
                setItem(data)
            })
    }, [itemId])

    return (
        <div className="container my-5">
            {
                item && <ItemDetail {...item}/>
            }
        </div>
    )

}

export default ItemDetailContainer