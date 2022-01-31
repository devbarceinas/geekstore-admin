import "./Input.css";

const Input = ({ label, ...props }) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input {...props} />
    </div>
  );
};

export { Input };
