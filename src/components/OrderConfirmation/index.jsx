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
        <div className="promo-form">
          <p>Есть промокод?</p>
          <input
            className="promo-form__input"
            name="promoText"
            value={promoText}
            onChange={this.handleChange}
            placeholder="Введите промокод"
          />
          <button
            className="promo-form__button"
            onClick={this.handlePromoSubmit}
          >
            Применить
          </button>
        </div>
        <div className="order-submit">
          <div className="order-submit__before-discount">
            <p>Сумма заказа:</p>
            <p className="order-submit__text">{sum} руб.</p>
          </div>
          {promo && (
            <div className="order-submit__discount">
              <p>Промокод:</p>
              <p className="order-submit__text"> -1800 руб.</p>
            </div>
          )}
          <div className="order-submit__after-discount">
            <p>Всего:</p>
            <p className="order-submit__text">{finalSum} руб.</p>
          </div>
          <button className="order-submit__button">Оформить заказ</button>
        </div>
      </div>
    );
  }
}

export default OrderConfirmation;
