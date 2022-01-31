import { Product } from "../Product";
import { Link } from "react-router-dom";
import { useGetRequest } from "../../hooks/useGetRequest";

import "./Products.css";

const Products = () => {
  const products = useGetRequest([]);
  console.log(products);

  return (
    <>
      <h2>Productos</h2>
      <Link to={"/products/create"} className="products-create">
        Agregar producto
      </Link>
      <section className="products-container">
        {
          products.length === 0
          ? <h3>No hay productos</h3>
          : products.length > 0 &&
            products.map((product) => (
              <Product
                key={product._id}
                product={product}
              />
          ))
        }
      </section>
    </>
  );
};

export { Products };