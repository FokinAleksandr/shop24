import React from 'react';
import './index.css';

const Links = () => {
  return (
    <React.Fragment>
      <div className="links-1-background">
        <ul className="links-1">
          <li>
            <a className="links-1__active" href="/">
              Одежда и аксессуары
            </a>
          </li>
          <li>
            <a href="/">Обувь</a>
          </li>
          <li>
            <a href="/">Украшения</a>
          </li>
          <li>
            <a href="/">Красота и здоровье</a>
          </li>
          <li>
            <a href="/">Товары для дома</a>
          </li>
          <li>
            <a href="/">Товары для кухни</a>
          </li>
        </ul>
      </div>
      <div className="links-2-background">
        <ul className="links-2">
          <li>
            <a href="/">Женская одежда</a>
          </li>
          <li>
            <a href="/">Мужская одежда</a>
          </li>
          <li>
            <a href="/">Аксессуары</a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Links;
