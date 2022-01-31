import { useEffect, useState } from "react";
import { url } from "../config/configAxios";

const useGetRequest = (intialState) => {
  const [products, setProducts] = useState(intialState);
  const [loading, setLoading] = useState(true);

  const allProducts = async () => {
    await url.get('/products')
      .then(response => {
        setProducts(response.data);
      })
  }

  useEffect(() => {
    setLoading(true);
    if (loading) {
      allProducts();
    }
    return () => setLoading(false);
  }, [products]);

  return products;
}

export { useGetRequest };