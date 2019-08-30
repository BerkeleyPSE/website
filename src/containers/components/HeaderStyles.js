import PropTypes from 'prop-types';
import styled from 'styled-components';

const SiteHeader = styled.h1`
  color: #fff;
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: -0.025rem;
  margin: 0;
  text-transform: uppercase;
`;

const PageHeader = styled.h2`
  color: ${props => (props.altStyle ? '#FFF' : '#895FAD')};
  font-size: 2.5rem;
  font-weight: 400;
  letter-spacing: 0.025rem;
  margin: 0;
  padding: 1rem 0;
  text-align: center;
`;

const SectionHeader = styled(PageHeader.withComponent('h3'))`
  color: ${props => (props.altStyle ? '#333' : '#FFF')};
  font-size: 1.75rem;
  margin: 0 20px;
  text-align: left;
`;

const SubSectionHeader = styled.h4``;

export { SiteHeader, PageHeader, SectionHeader, SubSectionHeader };

// PropTypes

PageHeader.propTypes = {
  altStyle: PropTypes.bool
};
