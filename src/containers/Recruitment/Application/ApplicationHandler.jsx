import React from 'react';
import styled from 'styled-components';

// components
import { ColumnContainer } from '../../components/ContainerStyles';
import Application from './app_is_open/Application';
import Preregistration from './app_is_closed/Preregistration';

const APP_IS_OPEN = true;

const ApplicationHandler = () => {
  document.title = 'Application - Pi Sigma Epsilon | Zeta Chi Chapter';
  return (
    <HandlerContainer>
      {APP_IS_OPEN ? <Application /> : <Preregistration />}
    </HandlerContainer>
  );
};

export default ApplicationHandler;

const HandlerContainer = styled(ColumnContainer)`
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;
