import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const IntLink = styled(Link)`
  color: #eac500;
  cursor: pointer;
  letter-spacing: 0.025rem;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    color: #895fad;
  }
`;

const ExtLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer'
})`
  color: #895fad;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    color: #eac500;
  }
`;

const IntButtonLink = IntLink.extend`
  background-color: rgba(0, 0, 0, 0);
  border: 2px solid #fff;
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 0.625rem 1.25rem;
  text-align: center;
  text-decoration: none;
  z-index: 10;

  &:hover {
    background-color: #fff;
    border: 2px solid #eac500;
    color: #eac500;
  }
`;

const ExtButtonLink = ExtLink.extend`
  background-color: rgba(0, 0, 0, 0);
  border: 2px solid #895fad;
  color: #895fad;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 0.625rem 1.25rem;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: #fff;
    border: 2px solid #895fad;
    color: #895fad;
  }
`;

export { IntLink, ExtLink, IntButtonLink, ExtButtonLink };

IntLink.propTypes = {
  to: PropTypes.string.isRequired
};

ExtLink.propTypes = {
  href: PropTypes.string.isRequired
};
