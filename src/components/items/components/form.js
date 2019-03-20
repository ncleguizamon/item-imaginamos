import React from 'react';
import store from '../../../store/store';
import { Link } from 'react-router-dom'

class FormItem extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            descripcion: '',
            cantidad: 0

        }
    }

    syncField(ev, fieldName) { // data form
        let element = ev.target;
        let value = element.value;
        let jsonState = {};
        jsonState[fieldName] = value;
        console.log(jsonState)
        this.setState(jsonState);
    }

    addItems() {
        store.dispatch({
            type: 'ADD_ITEM',
            payload: { nombre: this.state.nombre, descripcion: this.state.descripcion, cantidad: this.state.cantidad }
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
               <Link to="/login">Sandwiches</Link>
            <label for="nombre">Nombre</label>
            <input onChange={(e) => this.syncField(e, 'nombre')}
                value={this.state.nombre}
                name="nombre" id="nombre" />
            <label for="descripcion">descripcion</label>
            <textarea onChange={(e) => this.syncField(e, 'descripcion')}
                name="descripcion" id="descripcion">
                {this.state.descripcion}
            </textarea> <br></br>
            <label for="cantidad">cantidad</label>
            <input value={this.state.cantidad}
                onChange={(e) => this.syncField(e, 'cantidad')}
                type="number" name="cantidad" id="cantidad" />
            <button onClick={() => this.addItems()} > Añadir </button>
        </div>
        );
    }
}

export default FormItem;