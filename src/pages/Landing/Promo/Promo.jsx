import './Promo.css';

import promoImg from '../../../images/promo-logo.svg';

const Promo = () => {
  return (
    <section className="promo">
      <img src={promoImg} alt="Планета земля, нарисованная из слов веб." className="promo__img" />
      <h1 className="promo__heading">Учебный проект студента факультета <span className="promo__no-wrap">Веб-разработки</span>.</h1>
      <p className="promo__subheading">Листайте ниже, чтобы узнать больше про этот проект и&nbsp;его создателя.</p>
      <a href="#about-project" className="promo__btn-more">Узнать больше</a>
    </section>
  )
}

export default Promo
