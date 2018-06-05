import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

class OrderConfirmation extends React.PureComponent {
  static propTypes = {
    sum: PropTypes.number.isRequired
  };

  state = {
    promoText: '',
    promo: false
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  handlePromoSubmit = () => {
    const { promoText } = this.state;
    promoText === '123456' && this.setState({ promo: true, promoText: '' });
  };

  render() {
    const { sum } = this.props;
    const { promo, promoText } = this.state;
    const finalSum = promo ? sum - 1800 : sum;
    return (
      <div className="promo">
        <div className="promo__text">
          <p>Есть промокод?</p>
          <input
            className="promo__text__input"
            name="promoText"
            value={promoText}
            onChange={this.handleChange}
            placeholder="Введите промокод"
          />
          <button
            className="promo__text__button"
            onClick={this.handlePromoSubmit}
          >
            Применить
          </button>
        </div>
        <div className="promo__sum">
          <div className="promo__sum__before-discount">
            <p>Сумма заказа:</p>
            <p className="promo__sum__text">{sum} руб.</p>
          </div>
          {promo && (
            <div className="promo__sum__discount">
              <p>Промокод:</p>
              <p className="promo__sum__text"> -1800 руб.</p>
            </div>
          )}
          <div className="promo__sum__after-discount">
            <p>Всего:</p>
            <p className="promo__sum__text">{finalSum} руб.</p>
          </div>
          <button className="promo__sum__button">Оформить заказ</button>
        </div>
      </div>
    );
  }
}

export default OrderConfirmation;
