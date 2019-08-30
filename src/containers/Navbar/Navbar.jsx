import React from 'react';

// node modules
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// components
import DropdownUnit from './DropdownUnit';
import HamburgerMenu from './HamburgerMenu';
import { NAVBAR_INFO } from './navbar_constants';
import { RowContainer } from '../components/ContainerStyles';
import { Image } from '../components/ImageStyles';
import { SiteHeader } from '../components/HeaderStyles';
import { ParaText } from '../components/TextStyles';

const Navbar = () => {
  const dropdownUnits = NAVBAR_INFO.map(item => {
    return <DropdownUnit {...item} key={`nav_${item.header}`} />;
  });

  return (
    <NavbarContainer bgColor="#333">
      <LogoContainer to="/">
        <Image
          src="http://res.cloudinary.com/berkeleypse-tech/image/upload/f_auto,fl_force_strip,q_auto:best/app/logo"
          alt="Pi Sigma Epsilon logo"
          height="50px"
          width="89px"
        />
        <TextContainer>
          <SiteHeader>Pi Sigma Epsilon</SiteHeader>
          <Text altStyle>Zeta Chi Chapter</Text>
        </TextContainer>
      </LogoContainer>
      <DropdownUnitContainer>{dropdownUnits}</DropdownUnitContainer>
      <HamburgerMenuContainer>
        <HamburgerMenu />
      </HamburgerMenuContainer>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled(RowContainer)`
  height: 75px;
  justify-content: space-between;
`;

const LogoContainer = styled(RowContainer.withComponent(Link))`
  cursor: pointer;
  padding: 10px;
  text-decoration: none;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const TextContainer = styled.div`
  color: #fff;
  padding-left: 20px;
`;

const Text = styled(ParaText)`
  font-size: 1rem;
  margin: 0;
`;

const DropdownUnitContainer = styled(RowContainer)`
  position: absolute;
  right: 0;
  padding-right: 10px;
  @media (max-width: 769px) {
    display: none !important;
  }
`;

const HamburgerMenuContainer = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;
