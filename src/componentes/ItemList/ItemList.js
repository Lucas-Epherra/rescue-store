import "./ItemList.css";
import Item from "../Item/Item";
import { Link, useParams } from "react-router-dom";

const ItemList = ({ productos }) => {
  const { categoryId } = useParams();

  const categorias = [
    { label: "Todos los productos", path: "/productos", value: null },
    { label: "Silbatos", path: "/productos/silbatos", value: "silbatos" },
    { label: "Flotabilidad", path: "/productos/flotabilidad", value: "flotabilidad" },
    { label: "Gorros", path: "/productos/gorros", value: "gorros" },
    { label: "Binoculares", path: "/productos/binoculares", value: "binoculares" },
  ];

  return (
    <div className="itemListWrapper">
      <section className="categorias">
        {categorias.map((categoria) => {
          const isActive =
            categoria.value === null
              ? !categoryId
              : categoryId === categoria.value;

          return (
            <Link
              key={categoria.path}
              className={`categoryPill ${isActive ? "activeCategory" : ""}`}
              to={categoria.path}
            >
              {categoria.label}
            </Link>
          );
        })}
      </section>

      <section className="itemListGrid">
        {productos.map((prod) => (
          <Item key={prod.id} prod={prod} />
        ))}
      </section>
    </div>
  );
};

export default ItemList;