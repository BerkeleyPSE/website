import React from 'react';

// components
import PreregistrationForm from './PreregistrationForm';
import { ColumnContainer } from '../../../components/ContainerStyles';
import { PageHeader } from '../../../components/HeaderStyles';
import { ParaText } from '../../../components/TextStyles';

const Preregistration = () => (
  <ColumnContainer id="preregistration-form">
    <PageHeader>Fall 2018 Pre-Registration</PageHeader>
    <Text>
      Our Fall 2018 Application will open after our Meet the Chapter event.
      <br />
      If you would like notifications for our recruitment events in the
      meantime, please enter your name and email below.
    </Text>
    <PreregistrationForm />
  </ColumnContainer>
);

export default Preregistration;

const Text = ParaText.extend`
  font-size: 1rem;
  text-align: center;
`;
