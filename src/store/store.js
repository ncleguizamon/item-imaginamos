import { createStore } from 'redux';
import reducer from '../reducers/app';


const store = createStore(reducer, {
  Items: [],
  Users:[], 
  token_auth: '',
})

export default store;