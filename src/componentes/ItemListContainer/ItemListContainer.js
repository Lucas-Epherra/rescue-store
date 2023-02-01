import './itemListContainer.css';
import { useEffect, useState } from 'react';
import { leerMock } from '../../helpers/leerMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


function ItemListContainer(props) {

  const [productos, setProductos] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    leerMock()
      .then((res) => {

        if ( categoryId ) {
          setProductos( res.filter (prod => prod.categoria === categoryId) )
        } else {
          setProductos(res)
        }

      })
      .catch((err) => {
        console.log(err)
      })
  }, [categoryId])

  return (

    <div className='itemListCont'>
      <ItemList productos={productos} />
    </div>

  )
}

export default ItemListContainer;
