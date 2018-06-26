import React from 'react';

// node modules
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { iE } from '../../helpers';

// components
import { BROTHERS_PATH, EXECUTIVES_PATH } from '../Navbar/navbar_constants';
import { IntLink } from '../components/LinkStyles';
import { RowContainer } from '../components/ContainerStyles';

const PageHandler = ({ path, prevBro, nextBro }) => (
  <Container className="mx-1h my-0h" jc="space-between">
    {!iE(prevBro) && (
      <Link className="my-0 mx-1" to={`${path}/${prevBro.key}`}>
        <LeftIcon className="fas fa-chevron-left" aria-hidden="true" />
        {prevBro.name}
      </Link>
    )}
    {!iE(nextBro) && (
      <Link className="my-0 mx-1" to={`${path}/${nextBro.key}`}>
        {nextBro.name}
        <RightIcon className="fas fa-chevron-right" aria-hidden="true" />
      </Link>
    )}
  </Container>
);

export default PageHandler;

const Container = RowContainer.extend`
  width: 100%;
`;

const Link = IntLink.extend`
  border-bottom: 3px solid #333;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 0.125rem 0;
`;

const LeftIcon = styled.i`
  font-size: 0.9rem;
  padding: 0 0.3125rem 0 0;
`;

const RightIcon = styled.i`
  font-size: 0.9rem;
  padding: 0 0 0 0.3125rem;
`;

// PropTypes
PageHandler.propTypes = {
  prevBro: PropTypes.shape({
    key: PropTypes.string,
    name: PropTypes.string
  }),
  nextBro: PropTypes.shape({
    key: PropTypes.string,
    name: PropTypes.string
  }),
  path: PropTypes.oneOf([BROTHERS_PATH, EXECUTIVES_PATH]).isRequired
};
