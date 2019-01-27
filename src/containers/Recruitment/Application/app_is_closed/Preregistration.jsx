import React from 'react';

// components
import PreregistrationForm from './PreregistrationForm';
import { ColumnContainer } from '../../../components/ContainerStyles';
import { PageHeader } from '../../../components/HeaderStyles';
import { ParaText } from '../../../components/TextStyles';

const Preregistration = () => (
  <ColumnContainer id="preregistration-form">
    <PageHeader>Fall 2019 Pre-Registration</PageHeader>
    <Text>
      Our Spring 2019 Application is now closed.
      <br />
      If you would like notifications for our Fall 2019 recruitment events, please enter your name and email below.
    </Text>
    <PreregistrationForm />
  </ColumnContainer>
);

export default Preregistration;

const Text = ParaText.extend`
  font-size: 1rem;
  text-align: center;
`;
