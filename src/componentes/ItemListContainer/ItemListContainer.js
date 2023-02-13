import "./itemListContainer.css";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState([true]);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const prodRef = collection(db, "productos")
    const q = categoryId 
      ? query(prodRef, where("categoria", "==", categoryId))
      : prodRef

    getDocs(q)
      .then((resp) => {
        setProductos(
          resp.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          })
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div className="itemListCont">
      {loading ? (
        <h2>Cargando Productos...</h2>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
}

export default ItemListContainer;
