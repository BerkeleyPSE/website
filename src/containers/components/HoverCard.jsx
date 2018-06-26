import React from 'react';

// node modules
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// components
import { ColumnContainer } from '../components/ContainerStyles';

const HoverCard = props => {
  return (
    <HoverCardContainer className="m-1q" to={props.link}>
      <Header className="m-0">{props.header}</Header>
      <HR className="m-0 p-0" />
      <Description className="m-0">{props.description}</Description>
    </HoverCardContainer>
  );
};

export default HoverCard;

const HoverCardContainer = ColumnContainer.withComponent(Link).extend`
  border: 3px solid #333;
  color: #333;
  padding: 0.625rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.25s ease;
  min-height: 80px;
  min-width: 210px;

  &:hover {
    background-color: #333;
    border: 3px solid #895fad;
    color: #fff;
  }
`;

const Header = styled.h1`
  font-size: 1.5rem;
  font-weight: 300;
  padding: 0.625rem 0;
`;

const HR = styled.hr`
  border: 2px solid #895fad;
  width: 90%;
`;

const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
  padding: 0.625rem 0;
  text-transform: uppercase;
`;

// PropTypes

HoverCard.propTypes = {
  link: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
