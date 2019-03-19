import React from 'react';
import { connect } from 'react-redux';

function mapSteToProps(state) {
    return { Items: state.Items }
}

class ListItems extends React.Component {



    mapData() {
        return this.props.Items.map(row => {
            return (
                <tr>
                    <td>{row.nombre}</td>
                    <td>{row.descripcion}</td>
                    <td>{row.cantidad}</td>
                </tr>
            );
        });
    }


    setData() {
        return (<table>
            <tr>
                <th>Nombre </th>
                <th>Descripción</th>
                <th>Cantidad</th>
                <th>Acciones </th>
            </tr>
            {this.mapData()}
        </table>);

    }


    render() {
        return this.setData();
    }
}

export default connect(mapSteToProps)(ListItems);