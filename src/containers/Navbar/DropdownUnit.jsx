import React from 'react';

// node modules
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import DropdownMenu from 'react-dd-menu';
import '../../styles/react-dd.css';
import PropTypes from 'prop-types';

// components
import { NAVBAR_MAP } from './navbar_constants';
import { RowContainer } from '../components/ContainerStyles.js';

export default class DropdownUnit extends React.Component {
  state = {
    isOpen: false
  };

  close = () => {
    this.setState({ isOpen: false });
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  checkActive = (match, location) => {
    let { headerLink } = this.props;
    const realParentLink = NAVBAR_MAP[location.pathname];
    return realParentLink === headerLink;
  };

  render() {
    let menuOptions = {
      isOpen: this.state.isOpen,
      close: this.close,
      toggle: <HiddenButton onClick={this.toggle} />,
      align: 'right',
      menuAlign: 'right'
    };

    var pageLinks = this.props.pages.map(page => {
      return (
        <PageItem key={page.page}>
          <PageLink to={page.pageLink} activeClassName={activeClassName}>
            {page.page}
          </PageLink>
        </PageItem>
      );
    });

    return (
      <DropdownUnitContainer
        onMouseEnter={() => this.setState({ isOpen: true })}
        onMouseLeave={() => this.setState({ isOpen: false })}
      >
        <HeaderLink
          to={this.props.headerLink}
          activeClassName={activeClassName}
          isActive={this.checkActive}
        >
          <Header>{this.props.header}</Header>
        </HeaderLink>
        <DropdownContainer
          {...menuOptions}
          enterTimeout={400}
          leaveTimeout={400}
        >
          {pageLinks}
        </DropdownContainer>
      </DropdownUnitContainer>
    );
  }
}

const DropdownUnitContainer = RowContainer.extend`
  cursor: pointer;
  height: auto;
  padding: 0 5px;
`;

const HiddenButton = styled.button`
  display: none;
`;

const activeClassName = 'nav-item-active';
const HeaderLink = styled(NavLink).attrs({
  activeClassName
})`
  border-bottom: 2px solid #333;
  color: #fff;
  font-family: Lato, sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.025rem;
  height: auto;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.125s ease;
  padding: 5px 10px;

  &:hover {
    color: #ffd700;
  }

  &.${activeClassName} {
    border-bottom: 2px solid #ffd700;
  }
`;

const Header = styled.h3`
  font-size: 0.85rem;
  font-weight: 500;
  margin: 0;
`;

const PageLink = styled(NavLink).attrs({
  activeClassName
})`
  color: #fff !important;
  font-family: Lato, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.025rem;
  padding: 10px 10px 10px 5px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.125s ease;

  &:hover {
    color: #ffd700 !important;
  }

  &:active {
    background-color: #333 !important;
    color: #ffd700;
  }

  &.${activeClassName} {
    color: #ffd700 !important;
  }
`;

const DropdownContainer = styled(DropdownMenu)`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 0.625rem;
  position: relative;
`;

const PageItem = styled.li`
  background-color: #333 !important;
  padding: 0 1rem;
  transition: all 0.125s ease;

  &:hover {
    color: #ffd700 !important;
  }
`;

// PropTypes

DropdownUnit.propTypes = {
  header: PropTypes.string.isRequired,
  headerLink: PropTypes.string.isRequired,
  pages: PropTypes.arrayOf(PropTypes.object)
};
