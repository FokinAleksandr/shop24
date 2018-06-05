import items from '../data';
import * as types from '../constants';

export const addItems = () => ({
  type: types.ADD_ITEMS,
  payload: items
});

export const deleteItem = id => ({
  type: types.DELETE_ITEM,
  payload: id
});

export const changeItemQuantity = payload => ({
  type: types.CHANGE_ITEM_QUANTITY,
  payload: payload
});
