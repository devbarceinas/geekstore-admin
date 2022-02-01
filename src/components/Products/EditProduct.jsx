import { useEditRequest } from "../../hooks/useEditRequest";
import { Input } from "../Input"; 
import { Button } from "../Button";
import imgOne from "../../../public/images/img_1.jpg";

import "./CreateProduct.css";
import { withRouter, Link } from "react-router-dom";

const EditProduct = (props) => {
  const {id} = props.match.params;
  const {
    product,
    handleChange,
    handleFile,
    handleEditProduct
  } = useEditRequest(id, {
    nombre: '',
    precio: '',
    imagen: ''
  }, props);

  const { nombre, precio, imagen } = product;

  return (
    <>
      <h2 className="create-product--top">Edita: {nombre}</h2>
      <div className="create-product--container">
        <div className="create-product--img">
          <img src={imgOne} alt="illustration"/>
        </div>
        <form
          onSubmit={handleEditProduct}
          className="create-product--form">
          <div className="sheet-geek">
            {imagen && (
              <img
                src={`http://localhost:5000/${imagen}`} 
                alt={nombre} 
                width="300"
              />
            )}
          </div>
          <Input
            label="Producto"
            type="text"
            name="nombre"
            placeholder="Ingresa el nombre del producto"
            onChange={handleChange}
            defaultValue={nombre}
          />
          <Input
            label="Precio"
            type="number"
            min="0.00"
            step="0.01"
            name="precio"
            placeholder="0.00"
            onChange={handleChange}
            defaultValue={precio}
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
          <Button>Editar</Button>
        </form>
      </div>
    </>
  );
};

export default withRouter(EditProduct);
