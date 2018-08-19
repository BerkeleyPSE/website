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
  onSubmitRegform: values => dispatch(onSubmitRegform(values))
});

// const PreregistrationForm = () => (
//   <ColumnContainer className="my-1" ai="baseline">
//     <form id="regform" action={`${BASE_URL}/regforms/add`} method="POST">
//       <Input label="Name" name="name" placeholder="Oski Bear" isRequired />
//       <Input
//         label="Email"
//         type="email"
//         name="email"
//         placeholder="oski@berkeley.edu"
//         isRequired
//       />
//       <SubmitButton>Submit</SubmitButton>
//     </form>
//   </ColumnContainer>
// );

export default connect(
  null,
  mapDispatchToProps
)(PreregistrationForm);
