import React from 'react';

// node modules
import styled from 'styled-components';

// components
import { RowContainer } from '../components/ContainerStyles';
import { PageHeader, SectionHeader } from '../components/HeaderStyles';
import { ParaText } from '../components/TextStyles';
import { Image } from '../components/ImageStyles';

const About = () => {
  document.title = 'About - Pi Sigma Epsilon | Zeta Chi Chapter';
  return (
    <div>
      <PageHeader>About Us</PageHeader>
      <ZetaChiContainer>
        <ZCHeader>The Zeta Chi Chapter</ZCHeader>
        <DescriptionContainer>
          <Text altStyle>
            The Zeta Chi chapter of Pi Sigma Epsilon was founded in March 2013.
            Then-campus junior Sabrina Ruiz observed a lack of marketing and
            retail management courses and organizations on Berkeley’s campus
            despite students and recruiters interested in the fields. She
            believed PSE could be the solution. To make this idea into a
            reality, Ruiz recruited Kelly Chao, Cynthia Huang, Lydia Kim, Peggy
            Lin, and Hiu Ngan to compose Zeta Chi’s founding Alpha class. These
            six officially chartered the chapter in August 2013.
            <br /> <br />
            {/* 
            Zeta Chi struggled to get off its feet in it’s first year. The
            founding class experienced growing pains with recruiting and
            training potential members. Very few members were initiated into the
            Beta and Gamma classes, necessitating a remote training of the
            prospective Delta class over the summer of 2014. There were talks
            about closing down the fraternity due to lack of interest and member
            retention.
            <br /> <br /> 
            */}
            Slowly but surely, Zeta Chi began to build itself on solid
            foundation. The Lin administration oversaw a variety of students
            recruited in the Epsilon, Zeta, and Eta classes, which injected
            energy and fresh perspectives into the fraternity. The Aminpour
            administration took advantage of the chapter’s newfound youthful
            passion to apply for and receive sponsorship from Berkeley’s Haas
            School of Business in Spring 2016. The Theta class experienced the
            first rigorous and wholly educational PMT process, only to continue
            to be iterated and improved upon for the Iota and Kappa classes.
            <br /> <br />
            Now in its fifth year and recruiting for the prospective Nu
            class, Zeta Chi boasts a diverse brotherhood of over 45 active
            members in the Yu administration.
          </Text>
          <ImageContainer>
            <Caption>
              <strong>OUR FOUNDERS</strong>
              <br />
              Lydia Kim, Cynthia Huang, Peggy Lin
              <br />
              Hiu Ngan, Sabrina Ruiz, Kelly Chao
            </Caption>
            <ZCImage
              src="http://res.cloudinary.com/berkeleypse-tech/image/upload/f_auto,fl_force_strip,q_auto:best/about/zc_founders"
              Style="Zeta Chi founding class"
              height="640px"
              width="427px"
            />
          </ImageContainer>
        </DescriptionContainer>
      </ZetaChiContainer>
      <NationalContainer>
        <NationalHeader altStyle>Pi Sigma Epsilon</NationalHeader>
        <DescriptionContainer>
          <ImageContainer>
            <Caption>
              <strong>NATIONAL LOGO</strong>
            </Caption>
            <NationalImage
              src="http://res.cloudinary.com/berkeleypse-tech/image/upload/f_auto,fl_force_strip,q_auto:best/about/national_logo"
              alt={'Pi Sigma Epsilon national logo'}
              height="507px"
              width="400px"
            />
          </ImageContainer>
          <Text>
            In 1951, Lloyd L. Antle, an Ohio University graduate and Professor
            of Marketing at Georgia State University, conceived of the idea that
            the sales profession should have a professional fraternity of its
            own. After over a year of planning with the support of three of his
            colleagues, Pi Sigma Epsilon [PSE] was established on May 14, 1952.
            All four men were members of the Sales and Marketing Executives
            [SME] association of Atlanta, Georgia, which continues to be a
            sponsor of Pi Sigma Epsilon to this day.
            <br /> <br />
            Originally an all-male organization, which was characteristic of the
            sales profession at the time, PSE became co-ed in 1974 after an
            amendment to the national constitution. Today, women play key roles
            in all levels of the fraternity and in fact make up a slight
            majority of the membership in most chapters.
            <br /> <br />
            PSE does not use term "pledge", as it portrays a negative stereotype
            that goes against the ideals of the Fraternity. Hazing is strictly
            forbidden and all of those taking the steps to become full members
            are "prospective members" [PMs] until initiation.
            <br /> <br />
            Pi Sigma Epsilon is the only national, co-ed, professional business
            fraternity in sales, marketing, and management. PSE offers practical
            sales and marketing experience to members through active involvement
            in sales and marketing projects, marketing research, professional
            programs, and social events.
          </Text>
        </DescriptionContainer>
      </NationalContainer>
    </div>
  );
};

export default About;

const ZetaChiContainer = styled.div`
  background-color: #333;
  color: #fff;
  padding: 40px;
`;

const ZCHeader = SectionHeader.extend`
  border-bottom: 3px solid #fff;
`;

const DescriptionContainer = RowContainer.extend`
  width: 100%;
  margin: auto;
  text-align: left;
  justify-content: baseline;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Text = ParaText.extend`
  flex: 1;
  font-size: 1.1rem;
  margin: 10px 0;
  padding: 0 5px;
  text-align: left;
  @media (min-width: 768px) {
    padding: 0 20px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  padding: 0 10px;
`;

const Caption = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  letter-spacing: 0.025rem;
  text-align: center;
`;

const ImageTemplate = Image.extend`
  border: 3px solid #895fad;
`;

const ZCImage = ImageTemplate.extend`
  @media (min-width: 325px) {
    width: 325px;
    height: 217px;
  }

  @media (min-width: 425px) {
    width: 425px;
    height: 284px;
  }

  @media (min-width: 768px) {
    width: 640px;
    height: 427px;
  }
`;

const NationalImage = ImageTemplate.extend`
  @media (min-width: 325px) {
    width: 325px;
    height: 412px;
  }

  @media (min-width: 425px) {
    width: 400px;
    height: 507px;
  }
`;

const NationalContainer = styled.div`
  padding: 40px;
`;

const NationalHeader = SectionHeader.extend`
  border-bottom: 3px solid #333;
`;
