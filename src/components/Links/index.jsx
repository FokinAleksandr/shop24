import React from 'react';
import './index.css';

const Links = () => {
  return (
    <React.Fragment>
      <div className="links-1">
        <ul className="links-list-1">
          <li>
            <a className="links-list-1__active" href="#1">
              Одежда и аксессуары
            </a>
          </li>
          <li>
            <a href="#2">Обувь</a>
          </li>
          <li>
            <a href="#3">Украшения</a>
          </li>
          <li>
            <a href="#4">Красота и здоровье</a>
          </li>
          <li>
            <a href="#5">Товары для дома</a>
          </li>
          <li>
            <a href="#6">Товары для кухни</a>
          </li>
        </ul>
      </div>
      <div className="links-2">
        <ul className="links-list-2">
          <li>
            <a href="#7">Женская одежда</a>
          </li>
          <li>
            <a href="#8">Мужская одежда</a>
          </li>
          <li>
            <a href="#9">Аксессуары</a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Links;
