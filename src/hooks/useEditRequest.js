import { useState, useEffect } from 'react';
import { url } from '../config/configAxios';

const useEditRequest = (id, initialState, props) => {
  const [file, setFile] = useState('');
  const [product, setProduct] = useState(initialState);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    await url.get(`/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
  }

  useEffect(() => {
    setLoading(true);
    if (loading) {
      getProducts();
    }
    return () => setLoading(false);
  }, []);

  const handleChange = event => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value
    });
  }

  const handleFile = event => {
    const { files } = event.target;
    setFile(files[0]);
  }

  const handleEditProduct = async event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('nombre', product.nombre);
    formData.append('precio', product.precio);
    formData.append('imagen', file);

    try {
      const response = await url.put(`/products/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.status === 200) {
        props.history.push('/products');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return {
    product,
    handleChange,
    handleFile,
    handleEditProduct
  };
}

export { useEditRequest };