import './itemListContainer.css';
import { useEffect, useState } from 'react';
import { leerMock } from '../../helpers/leerMock';
import ItemList from '../itemList/itemList';


function ItemListContainer(props) {

  const [productos,setProductos] = useState([])
 // console.log(productos)


  useEffect( () => {
    leerMock()
      .then((res) => {
      setProductos(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return (

    <div className='itemListCont'>
      <ItemList productos={productos}/>
    </div>

  )
}

export default ItemListContainer;