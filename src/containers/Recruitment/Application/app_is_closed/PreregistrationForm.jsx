import React from 'react';

// components
import { ColumnContainer } from '../../../components/ContainerStyles';
import Input from '../input_components/Input';
import SubmitButton from '../input_components/SubmitButton';
import { BASE_URL } from '../../../../actions/api';

const PreregistrationForm = () => (
  <ColumnContainer className="my-1" ai="baseline">
    <form
      id="regform"
      action={`${BASE_URL}/regforms/add`}
      method="POST"
      // target="_blank"
    >
      <Input label="Name" name="name" placeholder="Oski Bear" isRequired />
      <Input
        label="Email"
        type="email"
        name="email"
        placeholder="oski@berkeley.edu"
        isRequired
      />
      <SubmitButton>Submit</SubmitButton>
    </form>
  </ColumnContainer>
);

export default PreregistrationForm;
