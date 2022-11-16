import './FormBtn.css';

const FormBtn = ({ children, extraClass = '', ...restProps }) => {
  return (
    <button type="submit" className={`form-btn ${extraClass}`} {...restProps}>
      {children}
    </button>
  );
};

export default FormBtn;
