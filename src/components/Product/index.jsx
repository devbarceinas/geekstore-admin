import { Link } from "react-router-dom";
import { useDeleteRequest } from "../../hooks/useDeleteRequest";

import "./Product.css";

const Product = (props) => {
  const {_id, nombre, precio, imagen} = props.product;
  const [handleDelete] = useDeleteRequest();
  return (
    <div className="product-container">
      <div className="product-image">
          {
            imagen &&
            <img 
              src={`http://localhost:5000/${imagen}`} 
              alt={nombre} 
            />
          }
      </div>
      <h3>{nombre}</h3>
      <p>Precio: ${parseFloat(precio)}</p>
      <div className="product-actions">
        <button 
          className="product-delete"
          onClick={() => handleDelete(_id)}>
            Eliminar
        </button>
        <Link to={`/products/edit/${_id}`}>
          <button className="product-edit">Editar</button>
        </Link>
      </div>
    </div>
  );
}

export { Product };