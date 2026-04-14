import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const prodRef = collection(db, "productos");

    const q = categoryId
      ? query(prodRef, where("categoria", "==", categoryId))
      : prodRef;

    getDocs(q)
      .then((resp) => {
        setProductos(
          resp.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <section className="itemListSection">
      <div className="itemListContainer">
        <div className="itemListHeader">
          <span className="itemListBadge">
            {categoryId ? "Categoría" : "Catálogo"}
          </span>

          <h2 className="itemListTitle">
            {categoryId ? `Productos de ${categoryId}` : "Nuestros productos"}
          </h2>

          <p className="itemListText">
            Explora el catálogo y encuentra el equipamiento ideal para rescate,
            seguridad y trabajo en entornos exigentes.
          </p>
        </div>

        {loading ? (
          <div className="itemListStateCard">
            <h3 className="itemListStateTitle">Cargando productos...</h3>
            <p className="itemListStateText">
              Estamos preparando el catálogo para ti.
            </p>
          </div>
        ) : productos.length > 0 ? (
          <ItemList productos={productos} />
        ) : (
          <div className="itemListStateCard">
            <h3 className="itemListStateTitle">No encontramos productos</h3>
            <p className="itemListStateText">
              No hay resultados para esta categoría por ahora.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ItemListContainer;