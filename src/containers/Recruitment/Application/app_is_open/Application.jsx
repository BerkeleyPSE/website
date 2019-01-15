import React from 'react';

// components
import ApplicationForm from './ApplicationForm';
import { ColumnContainer } from '../../../components/ContainerStyles';
import { PageHeader } from '../../../components/HeaderStyles';
import { ParaText } from '../../../components/TextStyles';

const Application = () => (
  <ColumnContainer id="recruitment-application">
    <PageHeader>Spring 2019 Application</PageHeader>
    <Text>
      Please answer all questions. The deadline is January 31st, 2019 at 11:59pm.
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
