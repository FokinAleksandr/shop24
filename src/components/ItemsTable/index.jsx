import React from 'react';
import propTypes from 'prop-types';
import './index.css';

class ItemsTable extends React.PureComponent {
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
        <h2 className="items-header">
          <span className="items-header__text">Ваша корзина</span>
        </h2>
        <table className="items-table">
          <thead>
            <tr className="items-table__row items-table__row_header">
              <th className="items-table__cell items-table__cell-header items-table__left-align">
                Товар
              </th>
              <th className="items-table__cell items-table__cell-header items-table__left-align">
                Описание
              </th>
              <th className="items-table__cell items-table__cell-header items-table__center-align">
                Количество
              </th>
              <th className="items-table__cell items-table__cell-header items-table__center-align">
                Цена
              </th>
              <th className="items-table__cell items-table__cell-header items-table__right-align">
                Удалить
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.values(items).map(obj => {
              return (
                <tr
                  className="items-table__row items-table__row-body"
                  key={obj.id}
                >
                  <td className="items-table__cell items-table__cell-body">
                    <img src={require('' + obj.img)} alt="img" />
                  </td>
                  <td className="items-table__cell items-table__cell-body">
                    <p className="items-table__name">{obj.name}</p>
                    <p className="items-table__code">Код: {obj.code}</p>
                    <p className="items-table__size">Размер: {obj.size}</p>
                    <p className="items-table__color">Цвет: {obj.color}</p>
                  </td>
                  <td className="items-table__cell items-table__cell-body items-table__center-align">
                    <button
                      className="items-table__minus-icon"
                      onClick={this.handleQuantityChange(
                        '-',
                        obj.id,
                        obj.quantity,
                        obj.price
                      )}
                    />
                    {obj.quantity}
                    <button
                      className="items-table__plus-icon"
                      onClick={this.handleQuantityChange(
                        '+',
                        obj.id,
                        obj.quantity,
                        obj.price
                      )}
                    />
                  </td>
                  <td className="items-table__cell items-table__cell-body items-table__center-align">
                    {obj.price + ' руб.'}
                  </td>
                  <td className="items-table__cell items-table__cell-body">
                    <button
                      name={obj.id}
                      className="items-table__delete-icon"
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

ItemsTable.propTypes = {
  deleteItem: propTypes.func.isRequired,
  changeItemQuantity: propTypes.func.isRequired,
  items: propTypes.objectOf(propTypes.object)
};

ItemsTable.defaultProps = {
  items: {}
};

export default ItemsTable;
