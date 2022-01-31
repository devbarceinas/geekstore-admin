import { useEffect, useState } from "react";
import { RequestContext } from "../context/RequestContext";
import { url } from "../config/configAxios";

const RequestProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);

  const getProducts = async () => {
    const products = await url.get('/products');
    setAllProducts(products.data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const data = {
    allProducts,
  };

  return (
    <RequestContext.Provider value={data}>
      {children}
    </RequestContext.Provider>
  );
}

export { RequestProvider };