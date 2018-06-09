import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { ItemsTable, OrderConfirmation, AddToOrder } from '../components';
import { addItems, deleteItem, changeItemQuantity } from '../actions';

class Box extends React.PureComponent {
  componentDidMount() {
    const { addItems } = this.props;
    addItems();
  }

  render() {
    const { items, deleteItem, changeItemQuantity, sum } = this.props;
    return (
      <React.Fragment>
        <ItemsTable
          items={items}
          deleteItem={deleteItem}
          changeItemQuantity={changeItemQuantity}
        />
        <OrderConfirmation sum={sum} />
        <AddToOrder />
      </React.Fragment>
    );
  }
}

Box.propTypes = {
  addItems: propTypes.func.isRequired,
  deleteItem: propTypes.func.isRequired,
  changeItemQuantity: propTypes.func.isRequired,
  items: propTypes.objectOf(propTypes.object),
  sum: propTypes.number.isRequired
};

Box.defaultProps = {
  items: {}
};

export default connect(
  state => ({
    items: state.items,
    sum: Object.values(state.items).reduce((prev, cur) => prev + cur.price, 0)
  }),
  { addItems, deleteItem, changeItemQuantity }
)(Box);
