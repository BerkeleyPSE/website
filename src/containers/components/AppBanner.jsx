import React from 'react';

// node modules
import styled from 'styled-components';

// components
import { RowContainer, ColumnContainer } from '../components/ContainerStyles';
import { IntButtonLink, ExtButtonLink } from '../components/LinkStyles';
import { ParaText } from '../components/TextStyles';

// const FB_EVENT_LINK = "https://www.facebook.com/events/866686896845315/";

export default class AppBanner extends React.Component {
  state = {
    show: false
  };

  closeBanner = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      this.state.show && (
        <BannerContainer>
          <MessageContainer>
            <ParaText altStyle>Our Fall 2018 Application is Live!</ParaText>
            <IntLink to="/app">Apply</IntLink>
            {/* <ExtLink href={FB_EVENT_LINK}>RSVP</ExtLink> */}
          </MessageContainer>
          <CloseContainer onClick={this.closeBanner}>
            <i className="fa fa-times" aria-hidden="true" />
          </CloseContainer>
        </BannerContainer>
      )
    );
  }
}

const BannerContainer = RowContainer.extend`
  background-color: #909090;
  margin: auto;
  text-align: center;
  width: 100%;
  z-index: 2;
`;

const ExtLink = ExtButtonLink.extend`
  font-size: 0.9rem;
  margin: 0 0.625rem;
  padding: 0.125rem 0.625rem;
  text-transform: uppercase;
`;

const IntLink = IntButtonLink.extend`
  font-size: 0.9rem;
  margin: 0.625rem;
  padding: 0.125rem 0.625rem;
  text-transform: uppercase;
`;

const MessageContainer = ColumnContainer.extend`
  flex-grow: 1;
  padding: 0 1.25rem 0.25rem;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const CloseContainer = styled.div`
  color: #fff;
  cursor: pointer;
  font-size: 1.125rem;
  margin: 0 1.25rem 0 auto;
  padding: 0 0.625rem;
  transition: all 0.25s ease;

  &:hover {
    color: #ffd700;
  }
`;
