import React, { Component } from 'react';

// node modules
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

class Form extends Component {
  static propTypes = {
    formName: PropTypes.string,
    submitting: PropTypes.bool,
    onSubmit: PropTypes.func,
    children: PropTypes.node
  };

  onSubmit = values => this.props.onSubmit(values, this.props.formName);

  render() {
    const { submitting, handleSubmit, children, formStatus } = this.props;
    if (submitting) return null; // TODO: render logo loader here
    if (formStatus) {
      if (formStatus === 201) return 'SUCCESSFUL';
      return 'FAILED';
    }
    return <form onSubmit={handleSubmit(this.onSubmit)}>{children}</form>;
  }
}

Form = reduxForm({})(Form);

const mapStateToProps = (state, props) => ({
  data: state.form[props.formName],
  form: props.formName,
  formStatus: state.app[props.formName]
});

export default connect(mapStateToProps)(Form);
