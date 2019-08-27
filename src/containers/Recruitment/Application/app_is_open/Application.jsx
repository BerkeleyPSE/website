import React from 'react';

// components
import ApplicationForm from './ApplicationForm';
import { ColumnContainer } from '../../../components/ContainerStyles';
import { PageHeader } from '../../../components/HeaderStyles';
import { ParaText } from '../../../components/TextStyles';

const Application = () => (
  <ColumnContainer id="recruitment-application">
    <PageHeader>Fall 2019 Application</PageHeader>
    <Text>
      Please answer all questions. The deadline is September 5th, 2019 at 12:00PM (NOON).
      Good luck!
    </Text>
    <ApplicationForm />
  </ColumnContainer>
);

export default Application;

const Text = ParaText.extend`
  font-size: 1rem;
  text-align: center;
`;
