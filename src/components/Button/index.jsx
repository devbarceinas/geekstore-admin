import "./Button.css";

const Button = ({children}) => {
  return (
    <button className="button-add">
      {children}
    </button>
  );
}

export { Button };