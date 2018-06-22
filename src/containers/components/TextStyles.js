import styled from 'styled-components';
import PropTypes from 'prop-types';

const ParaText = styled.p`
  color: ${props => (props.altStyle ? '#FFF' : '#333')};
  font-size: 1.125rem;
  margin: 0.25rem 0;
`;

export { ParaText };

// PropTypes

ParaText.propTypes = {
  altStyle: PropTypes.bool
};
