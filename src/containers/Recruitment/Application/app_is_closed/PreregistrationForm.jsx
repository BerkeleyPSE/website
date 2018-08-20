import React from 'react';

// node modules
import { connect } from 'react-redux';
import { Field } from 'redux-form';

// components
import { ColumnContainer } from '../../../components/ContainerStyles';
import Form from '../../../components/Form';
import Input from '../../../components/inputs/Input';
import SubmitButton from '../../../components/inputs/SubmitButton';

// actions
import { onSubmitRegform } from '../../../../actions/app';

const PreregistrationForm = ({ onSubmitRegform }) => (
  <ColumnContainer>
    <Form formName="regform" onSubmit={onSubmitRegform}>
      <Field
        name="name"
        component={Input}
        label="Name"
        type="text"
        placeholder="Oski Bear"
        required
      />
      <Field
        name="email"
        component={Input}
        label="Email"
        type="email"
        placeholder="oski@berkeley.edu"
        required
      />
      <SubmitButton>Submit</SubmitButton>
    </Form>
  </ColumnContainer>
);

const mapDispatchToProps = dispatch => ({
  onSubmitRegform: (values, formName) =>
    dispatch(onSubmitRegform(values, formName))
});

export default connect(
  null,
  mapDispatchToProps
)(PreregistrationForm);
