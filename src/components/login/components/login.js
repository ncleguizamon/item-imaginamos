import React from 'react';
import { connect } from 'react-redux';
import passwordHash  from 'password-hash';
import imgLogo from '../../../assets/users.png';


function mapSteToProps(state) {
    console.log(state);
    return { Items: state.Items }
}

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            accion: true, 
            confirmarPassword:'',
            Error:[]
        }
    }

    updateAccion(){
        this.setState( (state)=>({
            accion: !state.accion
        }));
    }
    syncField(ev, fieldName) { // data form
      
  
        let element = ev.target;
        let value = element.value;
        let jsonState = {};
        jsonState[fieldName] = value;
        console.log(jsonState)
        this.setState(jsonState);
    }


registar(){
if(passwordHash.generate(this.state.password) === passwordHash.generate(this.state.confirmarPassword)){
    let hashPassword=  passwordHash.generate(this.state.password);
    store.dispatch({
        type: 'ADD_USER',
        payload: { email: this.state.email, password: hashPassword }
    })
//this.clearData();
}else{
console.log('Error contraseña no considen')
}
}



   







    render() {
        return (
            <div className="container">
                <img src={imgLogo}></img>
                <div className="form-input">
                    <input placeholder="Email" type="email" name="Email" onChange={(e) => this.syncField(e, 'email')} />
                </div>
                <div className="form-input">
                    <input placeholder="Contraseña" type="password" name="password"  onChange={(e) => this.syncField(e, 'password')}/>
                </div>
                 {this.state.accion?(
                 
                 <input onClick={() => this.login()}  type="submit" name="submit" value="LOGIN" className="btn-login" />
                  ) :(
                    <div>
                    <div className="form-input">
                    <input placeholder="Confirmar contraseña" type="password" name="confirmar-password"  onChange={(e) => this.syncField(e, 'confirmarPassword')}/>
                </div>
                <input  onClick={() => this.registar()} type="submit" name="submit" value="Registrar" className="btn-login" />
                  </div> )
                }

                <a onClick={()=>this.updateAccion()}>{this.state.accion?'Registrarme': 'ya tengo cuenta...'}</a>
            </div>


        );
    }
}

export default connect(mapSteToProps)(Login);