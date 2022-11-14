import './FormBtn.css';

const FormBtn = ({ children, extraClass = '' }) => {
  return (
    <button type="submit" className={`form-btn ${extraClass}`}>
      {children}
    </button>
  );
};

export default FormBtn;
