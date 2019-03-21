import React from 'react';
import { connect } from 'react-redux';
import passwordHash from 'password-hash';
import imgLogo from '../../../assets/users.png';
import store from '../../../store/store';
import jwt from 'jsonwebtoken';
function mapSteToProps(state) {
    return { Users: state.Users }
}

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            accion: true,
            confirmarPassword: '',
            Error: {
                email: false
            },
            MSG: { accion: false, tipo: '', Msg: '' },
        }
    }

    updateAccion() {
        this.setState((state) => ({
            accion: !state.accion
        }));
    }
    syncField(ev, fieldName) { // data form


        let element = ev.target;
        let value = element.value;
        let jsonState = {};
        jsonState[fieldName] = value;
        this.setState(jsonState);
        this.validar(fieldName);
    }


    registar() {
        let user = this.props.Users.find(user => user.email == this.state.email);
        if (!user) {
            let hashedPassword = passwordHash.generate(this.state.password);
            this.validar('email');
            if (passwordHash.verify(this.state.confirmarPassword, hashedPassword) === true && this.state.Error.email === true) {
                store.dispatch({
                    type: 'ADD_USER',
                    payload: { email: this.state.email, password: hashedPassword }
                })
                this.clearData();
                this.setState({
                    MSG: { accion: true, tipo: 'success', Msg: 'Registro exitoso puedes iniciar.' }
                })
            } else {
                if (!this.state.Error.email) {
                    this.setState({
                        MSG: { accion: true, tipo: 'danger', Msg: 'Error email no valido' }
                    })
                } else {
                    this.setState({
                        MSG: { accion: true, tipo: 'danger', Msg: 'Error las contraseñas no considen.' }
                    })
                }
            }
        } else {
            this.setState({
                MSG: { accion: true, tipo: 'danger', Msg: 'Error usuario ya esta registrado' }
            })
        }
    }

    clearData() {
        this.setState({
            password: '',
            accion: true,
            confirmarPassword: '',
            Error: {
                email: false
            },
            MSG: { accion: false, tipo: '', Msg: '' },
        })
    }


    validar(fieldName) {
        switch (fieldName) {
            case 'email':
                let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

                if (emailRegex.test(this.state.email)) {
                    this.setState({
                        Error: { email: true }
                    })
                } else {
                    this.setState({
                        Error: { email: false }
                    })
                }
                break;


            default:

                break;
        }

    }

    login() {

        let user = this.props.Users.find(user => user.email == this.state.email);

        if (user) {
            if (passwordHash.verify(this.state.password, user.password)) {
              
              let token=  jwt.sign({
                    exp: Math.floor(Date.now() / 1000) + (60 * 60),
                    data: user
                  }, 'secret-imaginamos');

                  store.dispatch({
                    type: 'ADD_AUTH',
                    payload: {token_auth: token}
                })
                this.props.history.push('/')
            } else {
                this.setState({
                    MSG: { accion: true, tipo: 'danger', Msg: 'Error datos erroneos.' }
                })
            }
        } else {
            this.setState({
                MSG: { accion: true, tipo: 'danger', Msg: 'Error usuario no existe.' }
            })
        }
    }



    render() {
        return (
            <div className="body-login">

         
            <div className="container">
                <img src={imgLogo}></img>
                {this.state.MSG.accion ? (<p>{this.state.MSG.Msg}</p>) : ''}
                <div className="form-input">
                    <input placeholder="Email" type="email" value={this.state.email} name="Email" onChange={(e) => this.syncField(e, 'email')} />
                    {this.state.Error.email ? <i className="fa fa-check"></i> : ''}
                </div>
                <div className="form-input">
                    <input placeholder="Contraseña" value={this.state.password} type="password" name="password" onChange={(e) => this.syncField(e, 'password')} />
                </div>
                {this.state.accion ? (

                    <input onClick={() => this.login()} type="submit" name="submit" value="LOGIN" className="btn-login" />
                ) : (
                        <div>
                            <div className="form-input">
                                <input placeholder="Confirmar contraseña" value={this.state.confirmarPassword} type="password" name="confirmar-password" onChange={(e) => this.syncField(e, 'confirmarPassword')} />
                            </div>
                            <input onClick={() => this.registar()} type="submit" name="submit" value="Registrar" className="btn-login" />
                        </div>)
                }

                <a onClick={() => this.updateAccion()}>{this.state.accion ? 'Registrarme' : 'ya tengo cuenta...'}</a>
            </div>
            </div>

        );
    }
}

export default connect(mapSteToProps)(Login);