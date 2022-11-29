import { Link } from 'react-router-dom';

import './CustomLink.css';

// feature: button - <button>, internal-link - <Link>, external-link - <a>
// appearance: attention - red, accent - blue

const CustomLink = ({
  children,
  extraClass,
  feature = '',
  appearance = 'default',
  isLoading = false,
  disabled = false,
  ...restProps
}) => {
  const addClassName = () => {
    let resultClasses = '';

    if (extraClass) {
      resultClasses += ' ' + extraClass;
    }

    if (appearance === 'accent') {
      resultClasses += ' custom-link_type_accent';
    }
    if (appearance === 'attention') {
      resultClasses += ' custom-link_type_attention';
    }

    return resultClasses;
  };

  switch (feature) {
    case 'button':
      return (
        <button
          className={`custom-link${addClassName()}`}
          disabled={disabled || isLoading}
          {...restProps}
        >
          {isLoading ? (
            <div className="custom-link__spinner">
              <div className="custom-link__spinner-el"></div>
            </div>
          ) : (
            children
          )}
        </button>
      );

    case 'internal-link':
      return (
        <Link
          className={`custom-link${addClassName()} `}
          disabled={disabled}
          {...restProps}
        >
          {children}
        </Link>
      );

    case 'external-link':
      return (
        <a
          className={`custom-link${addClassName()}`}
          target="_blank"
          rel="noreferrer"
          disabled={disabled}
          {...restProps}
        >
          {children}
        </a>
      );
      
    default:
      console.error(
        `TypeError: unknown feature '${feature}' of CustomLink.\nAllowed options:\n  button - <button>,\n  internal-link - <Link>,\n  external-link - <a>`
      );
      return 'see console';
  }
};
export default CustomLink;
