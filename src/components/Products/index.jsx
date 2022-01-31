import { useContext } from "react";
import { RequestContext } from "../../context/RequestContext"; 
import { Product } from "../Product";
import { Button } from "../Button";

import "./Products.css";

const Products = () => {
  console.log("Hola");

  const { allProducts } = useContext(RequestContext);

  return (
    <>
      <h2>Productos</h2>
      <div>
        <Button />      
      </div>
      <section className="products-container">
        {
          allProducts.map((product) => (
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