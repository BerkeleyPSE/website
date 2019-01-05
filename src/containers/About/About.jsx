import React from 'react';

// node modules
import styled from 'styled-components';

// components
import { ColumnContainer } from '../components/ContainerStyles';
import { ExtLink } from '../components/LinkStyles';
import { PageHeader, SectionHeader } from '../components/HeaderStyles';
import { ParaText } from '../components/TextStyles';
import { Image } from '../components/ImageStyles';

const About = () => {
  document.title = 'About - Pi Sigma Epsilon | Zeta Chi Chapter';
  return (
    <div>
      <TopImageContainer ColumnContainer>
          <ColumnContainer>
            <AboutImage
              src="https://res.cloudinary.com/berkeleypse-tech/image/upload/v1546408789/about/aboutImage.jpg"
              alt="SF Bridge"
            />
            <Header className="py-2" altStyle>
              <b>About Us</b>
            </Header>
          </ColumnContainer>
      </TopImageContainer>
      <ZetaChiContainer>
        <ZCHeader>Zeta Chi Chapter</ZCHeader>
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
            Our chapter endeavors to epitomize the goals of the 
            fraternity in each and every member through various events focused 
            around developing professionalism, confidence, leadership, and networking 
            abilities. Alongside placing the utmost value on its diversity 
            of people, interests, and majors, the Zeta Chi Chapter provides its 
            brothers with opportunities to hone into their marketing and business 
            skills. Thus, in 2016, we established 
            <ExtLink href="http://zc-consulting.org"> ZC Consulting</ExtLink>, a 
            marketing and strategy consulting group, to further support our brothers' 
            experiential learning and professional opportunities. 
            <br/> <br/>
            Now in its sixth year, the Zeta Chi Chapter consist of over 45 members, 
            representing a variety of majors and career paths. In Spring 2019, we will be 
            recruiting for the prospective Xi class in the Kalluri administration.
            <br/> <br/>
            <i>We are proudly recognized and sponsored
            by the Walter A. Haas School of Business.</i>
          </Text>
        </DescriptionContainer>
      </ZetaChiContainer>
      <NationalContainer>
        <NationalHeader altStyle>Pi Sigma Epsilon</NationalHeader>
        <DescriptionContainer>
          <Text>
            In 1951, Lloyd L. Antle, an Ohio University graduate and Professor
            of Marketing at Georgia State University, conceived of the idea that
            the sales profession should have a professional fraternity of its
            own. After over a year of planning with the support of three of his
            colleagues, Pi Sigma Epsilon [PSE] was established on May 14, 1952.
            All four men were members of the Sales and Marketing Executives
            [SME] association of Atlanta, Georgia, which continues to be a
            sponsor of PSE to this day.
            <br /> <br />
            Pi Sigma Epsilon has grown to be the premiere organization for motivated 
            and dedicated students looking to maximize their college experience. 
            PSE’s goal is to provide collegiate students with practical business 
            experience through sales and marketing projects, marketing research, 
            professional programs, and social events.
            Pi Sigma Epsilon gives its members the opportunity to gain hands-on experience, 
            participate in conferences both regionally and nationally, and network 
            with top executives through PSE’s corporate partners. Currently there 
            are over 60 active chapters at Universities across the United States.
            <br /> <br />
            To learn more, visit Pi Sigma Epsilon’s <ExtLink href="https://www.pse.org/">national website</ExtLink> for more 
            information about the organization as a whole.
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
  padding: 40px 18% 40px 18%;
`;

const ZCHeader = SectionHeader.extend`
  border-bottom: 1.5px solid #fff;
`;

const DescriptionContainer = ColumnContainer.extend`
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

const TopImageContainer = styled.div`
  padding:0;
  text-align: center;
`;

const ImageTemplate = Image.extend`
  border: 0px;
`;

const AboutImage = ImageTemplate.extend`
  width: 100%;
  height:60vh;
  object-fit:cover;
`;

const NationalContainer = styled.div`
  padding: 40px 18% 40px 18%;
`;

const NationalHeader = SectionHeader.extend`
  border-bottom: 1.5px solid #333;
`;

const Header = PageHeader.extend`
  width: 100%;
  position: absolute;
  font-size: 3rem;
`;
