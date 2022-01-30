import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <section className="layout-container">
      {children}
    </section>
  );
};

export { Layout };
