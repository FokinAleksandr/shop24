import React from 'react';
import './index.css';
import social from './social.png';
import logo from './bw-logo.png';

const Footer = () => {
  return (
    <div className="footer-background">
      <div className="social-links">
        <p className="social-links__unit">SHOP24 в социальных сетях:</p>
        <img src={social} alt="img" />
      </div>
      <div className="footer-nav">
        <div className="footer-nav__column">
          <img src={logo} alt="img" />
        </div>
        <div className="footer-nav__column">
          <h3>8 (800) 500-75-55*</h3>
          <h6>Бесплатный звонок по всей России</h6>
          <h3>8 (800) 500-75-55*</h3>
        </div>
        <div className="footer-nav__column">
          <b>Каталог товаров</b>
          <a>Одежда и аксессуары</a>
          <a>Обувь</a>
          <a>Украшения</a>
          <a>Красота и здоровье</a>
          <a>Товары для дома, дачи и отдыха</a>
          <a>Товары для кухни</a>
        </div>
        <div className="footer-nav__column">
          <b>Заказ</b>
          <a>Оплата и доставка</a>
          <a>Возврат</a>
          <a>Помощь</a>
          <a>Благотворительный Фонд Константина Хабенского</a>
          <a>Гарантия на дополнительное обслуживание товара</a>
          <a>Пользовательское соглашение</a>
        </div>
        <div className="footer-nav__column">
          <b>Shop24</b>
          <a>Смотреть прямой эфир</a>
          <a>Расписание передач</a>
          <a>Акции</a>
          <a>Личный кабинет</a>
          <a>Поиск и карта сайта</a>
          <a>Карта брендов</a>
          <a>Обратная связь</a>
        </div>
        <div className="footer-nav__column">
          <b>Информация</b>
          <a>О канале</a>
          <a>Сотрудничество</a>
          <a>Покупайте с нами!</a>
          <a>Контакты</a>
        </div>
      </div>
      <div className="copyright">
        <span>
          Copyright © Владелец сайта ООО «Коннект», 2014-2018. Все права
          защищены.<br /> Продавцы товаров указаны в разделе контакты. При
          использовании материалов сайта ссылка на www.shop24.com обязательна.<br />
          115088, г. Москва, ул. Шарикоподшипниковская д.13 стр.62 Телефон +8
          800 500-75-55
        </span>
      </div>
    </div>
  );
};

export default Footer;
