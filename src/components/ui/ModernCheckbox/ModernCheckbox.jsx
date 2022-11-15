import './ModernCheckbox.css';

const ModernCheckbox = ({
  label,
  extraClass = '',
  checked,
  setChecked
}) => {
  return (
    <label className={`check-box ${extraClass}`}>
      <input
        type="checkbox"
        className="check-box__switcher"
        checked={checked}
        onClick={() => setChecked((checked) => !checked)}
      />
      {label}
    </label>
  );
};

export default ModernCheckbox;
