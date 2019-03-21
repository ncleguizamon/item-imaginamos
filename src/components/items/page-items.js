import React from 'react';

import FormItem from './components/form';
import ListItems from './components/list';




class PageItems extends React.Component{

 
   


    render(){
return (<div>
    <h1 style={{color:'#6ce6bd'}}>items</h1>
    <FormItem />
   <ListItems />
</div>
);
    }
}

export default PageItems;