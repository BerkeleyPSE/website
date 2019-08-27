import React from 'react';

// node modules
import styled from 'styled-components';

// components
import { PageHeader, SectionHeader } from '../../components/HeaderStyles';
import { RowContainer, ColumnContainer } from '../../components/ContainerStyles';
import { IntButtonLink } from '../../components/LinkStyles';

const Careers = () => {
  document.title = 'Careers - Pi Sigma Epsilon | Zeta Chi Chapter';

  return (
    <div id="careers-container">
      <RowContainer>
        <Image
          src="https://res.cloudinary.com/berkeleypse-tech/image/upload/v1547876385/alumni18.png"
          alt="Pi Sigma Epsilon Alumni 2018 Class"
        />
        <Header className="py-2 px-0" altStyle>
          Careers
        </Header>
      </RowContainer>
      <DataContainer>
        <NavYearBar> |
          <PageLink to="/careers2019" altStyle>2019</PageLink>
          <IntLink to="/careers2018" altStyle>2018</IntLink>
          <IntLink to="/careers2017" altStyle>2017</IntLink>
          <IntLink to="/careers2016" altStyle>2016</IntLink>
          <IntLink to="/careers2015" altStyle>2015</IntLink> | 
        </NavYearBar>

        <CareerHeader altStyle>2019 Full-Time</CareerHeader>
        <TableContainer className="mb-0 pb-1">
          <Label>
            <Na>NAME</Na>
            <Co>COMPANY</Co> 
            <Gr>GROUP</Gr>
            <Lo>LOCATION</Lo>
          </Label>
          <Industry>MARKETING</Industry>
          <Row>
            <Na>Yixuan Lu</Na>
            <Co>IBM</Co>
            <Gr>Programmatic Marketing</Gr>
            <Lo>New York, NY</Lo>
          </Row>
          <Industry>CONSULTING</Industry>
          <Row>
            <Na>Linda Li</Na>
            <Co>Accenture</Co>
            <Gr>Strategy Consulting</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Industry>FINANCE</Industry>
          <Row>
            <Na>Kevin Lee</Na>
            <Co>PwC</Co>
            <Gr>Tax</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Kyle Lu</Na>
            <Co>KPMG</Co>
            <Gr>Business Valuations</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Industry>TECHNOLOGY</Industry>
          <Row>
            <Na>Alex Dao</Na>
            <Co>Boeing</Co>
            <Gr>Software Engineering</Gr>
            <Lo>Huntington Beach, CA</Lo>
          </Row>
          <Industry>ENTREPRENEURSHIP</Industry>
          <Row>
            <Na>Justin Tan</Na>
            <Co>Excelerate Gaming</Co>
            <Gr>Founder & CEO</Gr>
            <Lo>Berkeley, CA</Lo>
          </Row>
        </TableContainer>

        <CareerHeader className="pt-1" altStyle>2019 Internships</CareerHeader>
        <TableContainer>
          <Label>
            <Na>NAME</Na>
            <Co>COMPANY</Co> 
            <Gr>GROUP</Gr>
            <Lo>LOCATION</Lo>
          </Label>
          <Industry>MARKETING</Industry>
          <Row>
            <Na>Edward Chen</Na>
            <Co>FCRP</Co>
            <Gr>Digital Media</Gr>
            <Lo>Fresno, CA</Lo>
          </Row>
          <Row>
            <Na>Rose Min</Na>
            <Co>P&G</Co>
            <Gr>Sales</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Vivan Hong</Na>
            <Co>IBM</Co>
            <Gr>Solutions Sales Summit Program</Gr>
            <Lo>Dallas, TX</Lo>
          </Row>
          <Industry>CONSULTING</Industry>
          <Row>
            <Na>Britney Yip</Na>
            <Co>FTI Consulting</Co>
            <Gr>Forensic and Litigation Consulting Intern</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Catie Fan</Na>
            <Co>Bain & Company</Co>
            <Gr>Management Consulting</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Clevian Hsia</Na>
            <Co>PwC</Co>
            <Gr>Forensic Consulting</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Kian Kiasaleh</Na>
            <Co>Deloitte</Co>
            <Gr>Human Capital Consulting</Gr>
            <Lo>New York, NY</Lo>
          </Row>
          <Row>
            <Na>Santosh Tatipamula</Na>
            <Co>Porsche</Co>
            <Gr>Consulting Intern</Gr>
            <Lo>Belmont, CA</Lo>
          </Row>
          <Row>
            <Na>Varsha Sundar</Na>
            <Co>Accenture</Co>
            <Gr>Management Consulting</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Industry>FINANCE</Industry>
          <Row>
            <Na>Andrew Zhou</Na>
            <Co>BDO</Co>
            <Gr>Tax</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Cathy An</Na>
            <Co>Abbott</Co>
            <Gr>Finance</Gr>
            <Lo>Chicago, IL</Lo>
          </Row>
          <Row>
            <Na>Gabriel Duarte</Na>
            <Co>Deloitte</Co>
            <Gr>Pioneer Internship</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Liona Li</Na>
            <Co>Wells Fargo</Co>
            <Gr>Consumer Lending Intern</Gr>
            <Lo>Sioux Falls, SD</Lo>
          </Row>
          <Industry>TECHNOLOGY</Industry>
          <Row>
            <Na>Dhakshi Balakumar</Na>
            <Co>UPS</Co>
            <Gr>Technology</Gr>
            <Lo>Alpharetta, GA</Lo>
          </Row>
          <Row>
            <Na>Jessie Lee</Na>
            <Co>Prudential Financial</Co>
            <Gr>Product Management Intern</Gr>
            <Lo>Sunnyvale, CA</Lo>
          </Row>
          <Row>
            <Na>Joshua Nuesca</Na>
            <Co>Barclays</Co>
            <Gr>Emerging Technology</Gr>
            <Lo>New York, NY</Lo>
          </Row>
          <Row>
            <Na>Michael Hillsman</Na>
            <Co>Dropbox</Co>
            <Gr>Software Engineering Intern</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row className="mb-1q">
            <Na>Tim Cheng</Na>
            <Co>Principal Financial</Co>
            <Gr>Software Engineering</Gr>
            <Lo>Des Moines, Iowa</Lo>
          </Row>
        </TableContainer>
      </DataContainer>
    </div>
  );
};

export default Careers;

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

const TableContainer = styled.div`
  width:80vw;
  padding: 0.75rem 0rem 1.5rem 0rem;
  text-align: left;
  font-size: 1.125rem;
`;

const DataContainer = ColumnContainer.extend`
  width:80vw;
  margin:auto;
  align-items:flex-start;
`;

const NavYearBar = RowContainer.extend`
  font-size: 0.9rem;
  width:100%;
  justify-content:flex-end;
  padding-top:20px;
`;

const IntLink = IntButtonLink.extend`
  font-size: 0.9rem;
  margin: 0.625rem;
  padding: 0.125rem;
  text-transform: uppercase;
  color:#818181;
  border:none;
  cursor: pointer;
  transition: all 0.25s ease;
  
  &:hover {
    color: #4b2178;
     border:none;
  }
`;

const PageLink = IntLink.extend`
  color:#333;
`;

const CareerHeader = SectionHeader.extend`
  position:relative
  padding:0.5rem 0rem;
`;

const Row = RowContainer.extend`
  justify-content:space-between;
  text-align:left;
  font-size:0.9rem;
  padding:0.4rem 0.5rem;
  border-style:solid none solid none;
  border-width: 0.5px;
  border-color:rgb(51,51,51,0.5);
`;

const Label = Row.extend`
  margin-bottom:0.5rem;
  font-weight:600;
  opacity:0.5;
  font-size:0.85rem;
  border:none;
`;

const Industry = Row.extend`
  font-size:0.9rem;
  font-weight:600;
  background-color: rgb(51,51,51,0.1)
`;

const Na = styled.div`
  width:15%;
`;

const Co = styled.div`
  width:33%;
`;

const Gr = styled.div`
  width:27%;
`;

const Lo = styled.div`
  width:15%;
`;
