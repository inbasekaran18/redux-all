import { combineReducers } from 'redux';
import {
  productsReducer,
  productDetailsReducer,
  createProductReducer,
  deleteProductReducer,
  cartReducer,
} from './reducers';

const rootReducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

export default rootReducer;