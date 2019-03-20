import { createStore } from 'redux';
import reducer from '../reducers/app';


const store = createStore(reducer, {
  Items: [],
  token_auth: '',
})

export default store;