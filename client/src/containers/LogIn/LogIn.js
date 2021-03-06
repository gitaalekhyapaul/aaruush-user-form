import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/index";
import LogInForm from "../../components/LogInForm/LogInForm";
import Jumbotron from "../../components/UI/Jumbotron/Jumbotron";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron>
          <LogInForm onSubmitForm={(values) => this.props.onLogin(values)} />
        </Jumbotron>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (data) => {
      dispatch(actions.login(data.username, data.password));
    },
  };
};

export default connect(null, mapDispatchToProps)(Login);
