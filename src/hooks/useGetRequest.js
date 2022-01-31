import { useEffect, useState } from "react";
import { url } from "../config/configAxios";

const useGetRequest = (intialState) => {
  const [products, setProducts] = useState(intialState);

  const allProducts = async () => {
    await url.get('/products')
      .then(response => {
        setProducts(response.data)
      })
  }

  console.log(products);

  useEffect(() => {
    allProducts();
  }, []);

  return products;
}

export { useGetRequest };