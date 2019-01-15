import React from 'react';

// node modules
import styled from 'styled-components';

// components
import { RowContainer } from '../components/ContainerStyles';
import { ExtLink } from '../components/LinkStyles';
import { PageHeader } from '../components/HeaderStyles';
import { ParaText } from '../components/TextStyles';
import CONTACT_LIST from './contact_constants.js';

const Contact = () => {
  document.title = 'Contact - Pi Sigma Epsilon | Zeta Chi Chapter';

  const contactInfo = CONTACT_LIST.map((item, index) => {
    return (
      <InfoText className="my-1 mx-0" key={`contact_${index}`}>
        For {item.for}, please email{' '}
        <ExtLink href={`mailto:${item.email}`} key={index}>
          {item.email}
        </ExtLink>
        .
      </InfoText>
    );
  });

  return (
    <div id="contact-container">
      <RowContainer>
        <Image
          src="http://res.cloudinary.com/berkeleypse-tech/image/upload/f_auto,fl_force_strip,q_auto:best/campanile"
          alt="Pi Sigma Epsilon brotherhood"
        />
        <Header className="py-2 px-0" altStyle>
          Contact Us
        </Header>
      </RowContainer>
      <InfoContainer>{contactInfo}</InfoContainer>
    </div>
  );
};

export default Contact;

const Image = styled.img`
  position: relative;
  height:60vh;
  width:100vw;
  object-fit:cover;
`;

const Header = PageHeader.extend`
  font-size: 3rem;
  text-align: center;
  position: absolute;
  width: 100%;
`;

const InfoText = ParaText.extend`
  margin: 1rem;
`;

const InfoContainer = styled.div`
  margin: 1rem 0 1rem 0;
  padding: 0.75rem 2.5rem;
  text-align: center;
`;
