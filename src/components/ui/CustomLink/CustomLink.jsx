import { Link } from 'react-router-dom';

import './CustomLink.css';

// type: button - <button>, internal-link - <Link>, external-link - <a>
// appearance: attention - red, accent - blue

const CustomLink = ({
  children,
  extraClass,
  type = 'internal-link',
  appearance = 'default',
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

  if (type === 'button') {
    return (
      <button
        className={`custom-link${addClassName()}`}
        type="button"
        {...restProps}
      >
        {children}
      </button>
    );
  }

  if (type === 'internal-link') {
    return (
      <Link className={`custom-link${addClassName()} `} {...restProps}>
        {children}
      </Link>
    );
  }

  if (type === 'external-link') {
    return (
      <a
        className={`custom-link${addClassName()}`}
        target="_blank"
        rel="noreferrer"
        {...restProps}
      >
        {children}
      </a>
    );
  }

  return 'Unknown type';
};
export default CustomLink;
