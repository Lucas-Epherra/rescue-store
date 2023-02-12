import './itemListContainer.css';
import { useEffect, useState } from 'react';
import { leerMock } from '../../helpers/leerMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


function ItemListContainer() {

  const [productos, setProductos] = useState([])
  const [loading,setLoading] = useState([true])
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
      .finally(() => {
         setLoading(false)
      } )
  }, [categoryId])

  return (

    <div className='itemListCont'>
    {
      loading
        ?<h2>Cargando Productos...</h2>
        :<ItemList productos={productos} />
    }
    </div>

  )
}

export default ItemListContainer;
