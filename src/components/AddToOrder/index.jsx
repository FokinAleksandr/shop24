import React from 'react';
import './index.css';
import bag from './bag-1.png';
import girl1 from './girl-1.png';
import feet from './feet.png';
import girl2 from './girl-2.png';

const AddToOrder = () => {
  return (
    <div className="add">
      <h2 className="add__header">
        <span>Добавьте к вашему заказу</span>
      </h2>
      <div className="add__column">
        <img src={bag} alt="img" />
        <p>
          Солнечные очки зеленого цвета в<br /> стиле ретро
        </p>
        <p>2 450 руб.</p>
      </div>
      <div className="add__column">
        <img src={girl1} alt="img" />
        <p>
          Шляпа<br />
        </p>
        <p>800 руб.</p>
      </div>
      <div className="add__column">
        <img src={feet} alt="img" />
        <p>
          Платье-миди с расклешенной<br />юбкой
        </p>
        <p>2 450 руб.</p>
      </div>
      <div className="add__column">
        <img src={girl2} alt="img" />
        <p>
          Платье-миди с расклешенной<br />юбкой
        </p>
        <p>2 450 руб.</p>
      </div>
    </div>
  );
};

export default AddToOrder;
