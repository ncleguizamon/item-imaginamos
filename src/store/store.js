import { createStore } from 'redux';
import reducer from '../reducers/app';


const store = createStore(reducer, {
  Items: [],
  index: '',
  itemUdate:false, 
  Item:[{nombre: '',
  descripcion: '',
  cantidad: 0}],
  Users:[], 
  token_auth: '',
})

export default store;