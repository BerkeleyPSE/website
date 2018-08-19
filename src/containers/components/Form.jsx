import React, { Component } from 'react';

// node modules
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import styled from 'styled-components';

// components
import Loader from './Loader';
import { ParaText } from './TextStyles';

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
    if (submitting) return <Loader />;
    if (formStatus) {
      return (
        <div className="mt-1h">
          <HR />
          <ParaText>
            {formStatus === 201
              ? 'Your submission was received successfully.'
              : 'Your submission failed. Please try again, or contact the Directors of Recruitment.'}
          </ParaText>
        </div>
      );
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

const HR = styled.hr`
  border: 1px solid var(--accent);
`;
