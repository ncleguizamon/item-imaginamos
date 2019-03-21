import React from 'react';
import { connect } from 'react-redux';
import store from '../../../store/store';

function mapSteToProps(state) {
    return { Items: state.Items }
}


const Styles={
    btn:{
        backgroundColor: '#6ce6bd', /* Green */
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
    },
    btnDanger:{
        backgroundColor: 'red', /* Green */
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
    }
}

class ListItems extends React.Component {

    delete(index){

    store.dispatch({
        type: 'REMOVE_ITEM',
        payload: index
    })
    }


    getId(index){
        store.dispatch({
            type: 'GET_ITEM',
            payload: index
        })
    }

    mapData() {
        return this.props.Items.map((row, index) => {
            return (
                <tr key={index}>
                    <td>{row.nombre}</td>
                    <td>{row.descripcion}</td>
                    <td>{row.cantidad}</td>
                    <td> <button style={Styles.btnDanger} onClick={()=>this.delete(index)} className="fas fa-trash-alt" >Eliminar</button>
                    <button  style={Styles.btn} onClick={()=>this.getId(index)} className="fas fa-trash-alt" >consultar</button> </td>
                </tr>
            );
        });
    }


    setData() {
        return this.props.Items.length > 0 ? (
            <table id="tableitem">
                <tbody>
                    <tr>
                        <th>Nombre </th>
                        <th>Descripción</th>
                        <th>Cantidad</th>
                        <th>Acciones </th>
                    </tr>
                    {this.mapData()}

                </tbody>

            </table>) : '';

    }




    render() {
        return this.setData();
    }
}

export default connect(mapSteToProps)(ListItems);