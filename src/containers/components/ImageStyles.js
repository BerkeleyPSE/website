import styled from 'styled-components';
import PropTypes from 'prop-types';

const Image = styled.img`
  border: ${props => (props.border ? '3px solid #895fad' : 'none')};
  height: ${props => props.height || 'auto'};
  width: ${props => props.width || 'auto'};
  max-width: 100%;
`;

export { Image };

Image.propTypes = {
  border: PropTypes.bool,
  height: PropTypes.string,
  width: PropTypes.string
};
