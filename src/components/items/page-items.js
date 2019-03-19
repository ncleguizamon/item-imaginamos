import React from 'react';
import{connect } from 'react-redux';

import FormItem from './components/form';
import ListItems from './components/list';


function mapSteToProps(state) {
    console.log(state);
    return { Items: state.Items }
  }

class PageItems extends React.Component{

    componentDidMount() {
      
    }
   


    render(){
return (<div>
    <h1>items</h1>
    <FormItem />
   <ListItems />
</div>
);
    }
    
}

export default connect(mapSteToProps)(PageItems);