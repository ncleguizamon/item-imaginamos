import { createStore } from 'redux';
import reducer from '../reducers/items';

const store = createStore(reducer, {
  Items: [],
})

export default store;