import React from 'react';
import store from '../../../store/store';
import { connect } from 'react-redux';


function mapSteToProps(state) {
    return { Item: state.Item[0] , itemUdate: state.itemUdate }
}

class FormItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: this.props.Item.nombre,
            descripcion: '',
            cantidad: 0

        }
    }


   
    syncField(ev, fieldName) { // data form
        let element = ev.target;
        let value = element.value;
        let jsonState = {};
        jsonState[fieldName] = value;
        this.setState(jsonState);
    }

    addItems() {
        store.dispatch({
            type: 'ADD_ITEM',
            payload: { nombre: this.state.nombre|| this.props.Item.nombre, descripcion: this.state.descripcion || this.props.Item.descripcion, cantidad: this.state.cantidad || this.props.Item.cantidad }
        })
 this.clearData();
    }

    update() {
        store.dispatch({
            type: 'UPDATE_ITEM',
            payload:{ nombre: this.state.nombre|| this.props.Item.nombre, descripcion: this.state.descripcion || this.props.Item.descripcion, cantidad: this.state.cantidad || this.props.Item.cantidad }
        })
        
 this.clearData();
    }

    clearData(){
        this.setState(
            {
                nombre: '',
                descripcion: '',
            cantidad: 0  
            }
        )
    }

    render() {
        return (<div>
                    <label>
                        Nombre:
                                <input onChange={(e) => this.syncField(e, 'nombre')}
                                    value={this.state.nombre || this.props.Item.nombre}
                                    name="nombre" id="nombre" />
                    </label>
                <label>
                Descripcion:
                 <textarea onChange={(e) => this.syncField(e, 'descripcion')}
                                name="descripcion" id="descripcion" value={this.state.descripcion || this.props.Item.descripcion} /> 
                            </label>
                        <label>
                        cantidad:
                        <input value={this.state.cantidad || this.props.Item.cantidad}
                            onChange={(e) => this.syncField(e, 'cantidad')}
                            type="number" name="cantidad" id="cantidad" />
                            </label>
                            {this.props.itemUdate?<button onClick={() => this.update()} >Editar </button>: <button onClick={() => this.addItems()} > Añadir </button>}
            
        </div>
        );
    }
}

export default connect(mapSteToProps)(FormItem);