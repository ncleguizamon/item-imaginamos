import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated  ? (
          <Component {...props} />
        )
        : (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
    )}
  />
);
PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};
function mapStateToProps(state) {

  if (state.token_auth !== null && state.token_auth !== '') {
    
    return { isAuthenticated: true, };
  } else {
    return {
      isAuthenticated: false,
    };
  }
}
export default connect(mapStateToProps)(PrivateRoute);