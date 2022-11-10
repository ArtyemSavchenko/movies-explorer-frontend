import { useNavigate } from 'react-router-dom';

import CustomLink from '../../components/CustomLink/CustomLink';

import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="not-found-page">
      <div className="not-found-page__content">
        <p className="not-found-page__err-number">404</p>
        <p className="not-found-page__err-text">Страница не найдена</p>
      </div>
      <CustomLink extraClass='focus-effect' type='button' appearance='accent' onClick={() => navigate(-1)}>Назад</CustomLink>
    </section>
  )
};

export default NotFound;
