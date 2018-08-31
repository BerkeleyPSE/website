import React from 'react';

// node modules
import styled from 'styled-components';
// import SocialMediaBar from 'react-social-media-bar';

// components
// import FOOTER_LINKS from './footer_constants';
import { RowContainer } from '../components/ContainerStyles';
import { ParaText } from '../components/TextStyles';
import { ExtLink } from '../components/LinkStyles';

const Footer = () => {
  return (
    <FooterContainer bgColor="#333" jc="space-between">
      <MarginContainer>
        <Text altStyle>&#169;2018. Pi Sigma Epsilon, Zeta Chi Chapter.</Text>
      </MarginContainer>
      {/* need to upgrade social media bar to Font Awesome v5 before continuing */}
      {/* <SocialMediaBar
        icons={FOOTER_LINKS}
        iconColor="#FFF"
        iconSize="1.125rem"
        hoverColor="#FFD700"
        margin={{ top: "5px", right: "7.5px", bottom: "5px", left: "7.5px" }}
      /> */}
      <MarginContainer>
        <Text className="m-0" altStyle>
          <SelfLink href="http://www.rahrang.xyz" target="blank">
            Rahul Rangnekar
          </SelfLink>
          , Tim Cheng
        </Text>
      </MarginContainer>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = RowContainer.extend`
  padding: 5px 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MarginContainer = styled.div`
  margin: 5px 10px;
`;

const Text = ParaText.extend`
  font-size: 0.8rem;
  font-weight: 500;
`;

const SelfLink = ExtLink.extend`
  color: #fff;
`;
