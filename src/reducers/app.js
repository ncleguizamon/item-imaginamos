const item=[{nombre: '',
descripcion: '',
cantidad: 0}];
function items(state = {}, action) {
    switch (action.type) {
      case 'ADD_ITEM': {
    return  { 
      //Items: state.Items.concat(action.payload)}
      ...state,
      Items: [...state.Items, action.payload] , Item :item,itemUdate:false
      
      }
    }
    case 'ADD_USER':{
      return  { 
        ...state,
        Users: [...state.Users, action.payload]
        }
   }
   case 'ADD_AUTH':{
    return{...state, ...action.payload}
 }
 case 'REMOVE_ITEM':{
 return {
  ...state, Items : state.Items.filter( (item, index) => index !== action.payload), Item :item, itemUdate:false
 }

 }

 case 'GET_ITEM':{
   
  return {
    ...state, Item : state.Items.filter( (item, index) => index === action.payload),itemUdate:true ,index : action.payload
  }
  }

  case 'UPDATE_ITEM':{
   
  state.Items[state.index]= { ...state.Items[state.index], ...action.payload}
    
  return {
    ...state , Item :item,itemUdate:false , index : '', Items : state.Items.filter( (item, index) => index !== '')
  }
    }

      default:
        return state
    }
  }
  
  export default items;