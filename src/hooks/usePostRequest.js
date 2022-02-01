import { useState } from "react";
import { url } from "../config/configAxios";

const usePostRequest = (initialState, props) => {
  const [alert, setAlert] = useState(false);
  const [file, setFile] = useState('');
  const [saveProduct, setSaveProduct] = useState(initialState);

  const handleChange = event => {
    const { name, value } = event.target;
    setSaveProduct({
      ...saveProduct,
      [name]: value
    });
  }

  const handleFile = event => {
    const { files } = event.target;
    setFile(files[0]);
  }

  const handleAddProduct = async event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('nombre', saveProduct.name);
    formData.append('precio', saveProduct.price);
    formData.append('imagen', file);

    try {
      const response = await url.post("/products", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.status === 200) {
        setSaveProduct(initialState);
        setFile('');
        setAlert(true);
        props.history.push('/products');
      }
    } catch (error) {
      setAlert(true);
    }
  }

  return {
    saveProduct,
    alert,
    handleChange,
    handleFile,
    handleAddProduct,
  };

}

export { usePostRequest };