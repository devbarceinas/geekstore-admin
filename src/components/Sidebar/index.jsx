import "./Sidebar.css";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar-container">
      <Link to={"/"} className="sidebar-product">Inicio</Link>
      <Link to={"/products"} className="sidebar-product">Productos</Link>
    </aside>
  );
};

export { Sidebar };
