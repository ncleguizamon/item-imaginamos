function items(state = {}, action) {
    switch (action.type) {
      case 'ADD_ITEM': {
    return  { 
      //Items: state.Items.concat(action.payload)}
      ...state,
      Items: [...state.Items, action.payload]
      }
    }
    case 'ADD_USER':{
      return  { 
        ...state,
        Users: [...state.Items, action.payload]
        }
   }
  

     
      default:
        return state
    }
  }
  
  export default items;