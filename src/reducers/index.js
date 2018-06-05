import { combineReducers } from 'redux';
import * as types from '../constants';

const items = (state = {}, { type, payload }) => {
  let newState;
  switch (type) {
    case types.ADD_ITEMS:
      return payload;
    case types.DELETE_ITEM:
      newState = { ...state };
      delete newState[payload];
      return newState;
    case types.CHANGE_ITEM_QUANTITY:
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          quantity: payload.quantity,
          price: payload.price
        }
      };
    default:
      return state;
  }
};

export default combineReducers({ items });
