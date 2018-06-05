import React from 'react';
import propTypes from 'prop-types';
import './index.css';

class Items extends React.PureComponent {
  handleDelete = ({ target }) => {
    const { deleteItem } = this.props;
    deleteItem(target.name);
  };

  handleQuantityChange = (sign, id, quantity, price) => () => {
    const oneUnitPrice = price / quantity;

    const { changeItemQuantity } = this.props;
    if (sign === '+') {
      changeItemQuantity({
        id: id,
        quantity: quantity + 1,
        price: oneUnitPrice * (quantity + 1)
      });
    } else {
      if (quantity > 1) {
        changeItemQuantity({
          id: id,
          quantity: quantity - 1,
          price: oneUnitPrice * (quantity - 1)
        });
      }
    }
  };

  render() {
    const { items } = this.props;
    return (
      <div className="items">
        <h2 className="items__header">
          <span>Ваша корзина</span>
        </h2>
        <table className="items__table">
          <thead>
            <tr>
              <th className="items__table__img">Товар</th>
              <th className="items__table__description">Описание</th>
              <th>Количество</th>
              <th>Цена</th>
              <th>Удалить</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(items).map(obj => {
              return (
                <tr key={obj.id}>
                  <td className="items__table__img">
                    <img src={require('' + obj.img)} alt="img" />
                  </td>
                  <td className="items__table__description">
                    <p className="items__table__name">{obj.name}</p>
                    <p className="items__table__code">Код: {obj.code}</p>
                    <p className="items__table__size">Размер: {obj.size}</p>
                    <p className="items__table__color">Цвет: {obj.color}</p>
                  </td>
                  <td>
                    <button
                      className="items__table__minus"
                      onClick={this.handleQuantityChange(
                        '-',
                        obj.id,
                        obj.quantity,
                        obj.price
                      )}
                    />
                    {obj.quantity}
                    <button
                      className="items__table__plus"
                      onClick={this.handleQuantityChange(
                        '+',
                        obj.id,
                        obj.quantity,
                        obj.price
                      )}
                    />
                  </td>
                  <td>{obj.price + ' руб.'}</td>
                  <td>
                    <button
                      name={obj.id}
                      className="items__table__delete"
                      onClick={this.handleDelete}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

Items.propTypes = {
  deleteItem: propTypes.func.isRequired,
  changeItemQuantity: propTypes.func.isRequired,
  items: propTypes.objectOf(propTypes.object)
};

Items.defaultProps = {
  items: {}
};

export default Items;
