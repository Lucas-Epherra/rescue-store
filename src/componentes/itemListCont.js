import './itemList.css';


function ItemListContainer (props) {
    return (
      <div>
        <h1 className='bienvenida'>{props.text}</h1>
      </div>
    )
}

export default ItemListContainer;