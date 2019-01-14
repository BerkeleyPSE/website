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
      <ParaText className="my-1 mx-0" key={`contact_${index}`}>
        For {item.for}, please email{' '}
        <ExtLink href={`mailto:${item.email}`} key={index}>
          {item.email}
        </ExtLink>
        .
      </ParaText>
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
{/*
      <RefContainer>
        <h1>Point of Contact For:</h1>
        <h2>General Questions or Inquiries</h2>
        <ExtLink href="mailto:'berkeleypse.president@gmail.com">berkeleypse.president@gmail.com</ExtLink>
        <h2>Corporate Projects or Sponsorship Questions</h2>
        <ExtLink href="mailto:'berkeleypse.pr@gmail.com">berkeleypse.pr@gmail.com</ExtLink>
        <h2>Recruitment Questions or Concerns</h2>
        <ExtLink href="mailto:'berkeleypse.recruiting@gmail.com">berkeleypse.recruiting@gmail.com</ExtLink>
        <h2>Social Media or Technical Issues</h2>
        <ExtLink href="mailto:'berkeleypse.marketing@gmail.com">berkeleypse.marketing@gmail.com</ExtLink>
      </RefContainer>
*/}
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

const RefContainer = styled.div`
  text-align:center;
`;

const InfoContainer = styled.div`
  // margin: 1rem 0 1rem 0;
  padding: 0.75rem 2.5rem;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;
