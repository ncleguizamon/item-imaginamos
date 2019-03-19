import React from "react";
import { Provider } from 'react-redux';
import store from './store/store';
import PageItems from './components/items/page-items';


const App = () => {
  return (
    <Provider store={store}>
  <PageItems />
  </Provider>
   
  );
};
export default App;
