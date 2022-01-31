import { Input } from "../Input"; 
import { Button } from "../Button";
import imgOne from "../../../public/images/img_1.jpg";

import "./CreateProduct.css";
import { Link } from "react-router-dom";
import { usePostRequest } from "../../hooks/usePostRequest";

const CreateProduct = () => {
  const {
    saveProduct,
    alert,
    handleChange,
    handleFile,
    handleAddProduct,
  } = usePostRequest({name: '', price: ''});
  
  return (
    <>
      <h2 className="create-product--top">Añade un nuevo producto</h2>
      {alert && <p>Cool!</p>}
      <div className="create-product--container">
        <form
          onSubmit={handleAddProduct} 
          className="create-product--form">
          <Input
            label="Producto"
            type="text"
            name="name"
            value={saveProduct.name}
            placeholder="Ingresa el nombre del producto"
            onChange={handleChange}
          />
          <Input
            label="Precio"
            type="number"
            min="0.00"
            step="0.01"
            name="price"
            value={saveProduct.price}
            placeholder="0.00"
            onChange={handleChange}
          />
          <Input
            label="Imagen"
            type="file"
            name="file"
            onChange={handleFile}
          />
          <Link to={"/products"}>
            <Button>
              Regresar
            </Button>
          </Link>
          <Button>Confirmar</Button>
        </form>
        <div className="create-product--img">
          <img src={imgOne} alt="illustration"/>
        </div>
      </div>
    </>
  );
}

export { CreateProduct };