import "./Product.css";

const Product = (props) => {
  const {nombre, precio, imagen} = props.product;
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
      <h3>Producto: {nombre}</h3>
      <p>Precio: ${parseFloat(precio)}</p>
      <div className="product-actions">
        <button className="product-delete">Eliminar</button>
        <button className="product-edit">Editar</button>
      </div>
    </div>
  );
}

export { Product };