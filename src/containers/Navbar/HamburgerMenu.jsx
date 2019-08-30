import React from 'react';

// node modules
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu';

// components
import { NAVBAR_INFO } from './navbar_constants';

const MENU_WIDTH = 275;

export default class Navbar extends React.Component {
  state = {
    isMenuOpen: false
  };

  toggle = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  render() {
    const menuItems = NAVBAR_INFO.map(item => {
      return (
        <SectionContainer key={`ham_${item.header}`}>
          <HeaderContainer>
            <HeaderLink
              to={item.headerLink}
              activeClassName={activeClassName}
              key={`ham_${item.header}`}
            >
              {item.header}
            </HeaderLink>
          </HeaderContainer>
          <PagesContainer>
            {item.pages &&
              item.pages.map(page => {
                return (
                  <SinglePageContainer key={`${item.header}_${page.page}`}>
                    <PageLink
                      to={page.pageLink}
                      activeClassName={activeClassName}
                    >
                      {page.page}
                    </PageLink>
                    <br />
                  </SinglePageContainer>
                );
              })}
          </PagesContainer>
        </SectionContainer>
      );
    });

    return (
      <Menu
        width={MENU_WIDTH}
        isOpen={this.state.isMenuOpen}
        onStateChange={() => this.toggle}
        styles={menuStyles}
        right
      >
        {menuItems}
      </Menu>
    );
  }
}

const SectionContainer = styled.div`
  padding: 0.5rem 0;
  width: 100%;
  text-align: center;
`;

const HeaderContainer = styled.div`
  border-bottom: 2px solid #895fad;
  padding: 0.25rem 0;
`;

const PagesContainer = styled.div`
  padding: 0.375rem 0;
  text-align: right;
`;

const SinglePageContainer = styled.div`
  padding: 0.25rem 0;
`;

const activeClassName = 'nav-item-active';
const Link = styled(NavLink).attrs({
  activeClassName
})`
  color: #fff;
  cursor: pointer;
  font-family: Lato, sans-serif;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.25s ease;

  &:hover {
    color: #895fad;
  }

  &.${activeClassName} {
    color: #ffd700;
  }
`;

const PageLink = styled(Link)`
  font-size: 1.1rem;
  letter-spacing: 0.025rem;
`;

const HeaderLink = styled(Link)`
  font-size: 1.25rem;
  letter-spacing: 0.05rem;
  text-align: center;
  width: 100%;
`;

const menuStyles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '30px',
    height: '24px',
    right: '25px',
    top: '25px'
  },

  bmBurgerBars: {
    backgroundColor: '#895FAD'
  },

  bmCrossButton: {
    height: '30px',
    width: '30px'
  },

  bmCross: {
    backgroundColor: '#895FAD'
  },

  bmMenu: {
    background: '#303030',
    padding: '1.75rem 2rem 0',
    fontSize: '1em',
    color: '#FFF',
    width: `${MENU_WIDTH}px`,
    overflow: 'hidden'
  },

  bmItemList: {
    padding: '0.2rem 0.8rem'
  },

  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.5)',
    position: 'fixed',
    top: '0',
    left: '0'
  }
};
