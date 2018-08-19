import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class Form extends Component {
  static propTypes = {
    formName: PropTypes.string,
    submitting: PropTypes.bool,
    onSubmit: PropTypes.func,
    children: PropTypes.node
  };

  render() {
    // debugger;
    const { submitting, handleSubmit, onSubmit, children } = this.props;
    if (submitting) return null; // TODO: render logo loader here
    return <form onSubmit={handleSubmit(onSubmit)}>{children}</form>;
  }
}

// connect to redux form

Form = reduxForm({})(Form);

const mapStateToProps = (state, props) => ({
  data: state.form[props.formName],
  form: props.formName
});

export default connect(mapStateToProps)(Form);
