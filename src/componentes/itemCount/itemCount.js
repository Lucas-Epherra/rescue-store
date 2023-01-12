import { useState } from 'react';
import './itemCount.css';

const ItemCount = () => {

  const [counter, setCounter] = useState(0)

  const sumar = () => {

    setCounter(counter + 1)
  }

  const restar = () => {

    setCounter(counter - 1)
  }

  return (

    <div className='container countCard'>

      <strong>
        <p>
          Cantidad: 
        </p>
      </strong>

    <section className='clicker mx-2'>
      <button className='btn btn-secondary mx-2' onClick={sumar}>+</button>
      <p className='count'>{counter}</p>
      <button className='btn btn-secondary mx-2' onClick={restar}>-</button>
    </section>

    </div>
  )
}

export default ItemCount;