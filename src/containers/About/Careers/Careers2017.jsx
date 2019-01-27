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
          <IntLink to="/careers2019" altStyle>2019</IntLink>
          <IntLink to="/careers2018" altStyle>2018</IntLink>
          <PageLink to="/careers2017" altStyle>2017</PageLink>
          <IntLink to="/careers2016" altStyle>2016</IntLink>
          <IntLink to="/careers2015" altStyle>2015</IntLink> |
        </NavYearBar>

        <CareerHeader altStyle>2017 Full-Time</CareerHeader>
        <TableContainer className="mb-0 pb-1">
          <Label>
            <Na>NAME</Na>
            <Co>COMPANY</Co> 
            <Gr>GROUP</Gr>
            <Lo>LOCATION</Lo>
          </Label>
          <Industry>MARKETING</Industry>
          <Row>
            <Na>Eva Chen</Na>
            <Co>Oracle</Co>
            <Gr>Cloud Application</Gr>
            <Lo>Redwood City, CA</Lo>
          </Row>
          <Row>
            <Na>Lily Li</Na>
            <Co>Progress Investment Management Company</Co>
            <Gr>Marketing</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Shreya Jerath</Na>
            <Co>DigitasLBi</Co>
            <Gr>Media Technology</Gr>
            <Lo>New York, NY</Lo>
          </Row>
          <Industry>CONSULTING</Industry>
          <Row>
            <Na>Anne-Ting Chen</Na>
            <Co>PwC</Co>
            <Gr>Management Consulting</Gr>
            <Lo>Tokyo, Japan</Lo>
          </Row>
          <Row>
            <Na>Dorene Zhou</Na>
            <Co>Infosys</Co>
            <Gr>Management Consulting</Gr>
            <Lo>Newark, CA</Lo>
          </Row>
          <Row>
            <Na>Jane Suk</Na>
            <Co>ZS Associates</Co>
            <Gr>Management Consulting</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Melody Chu</Na>
            <Co>Triage Consulting Group</Co>
            <Gr>Management Consulting</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Reann Pham</Na>
            <Co>PwC</Co>
            <Gr>Technology Consulting</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Industry>TECHNOLOGY</Industry>
          <Row>
            <Na>Nathan Aminpour</Na>
            <Co>Driver</Co>
            <Gr>Partner Operations</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Young Hoon Kim</Na>
            <Co>Cisco</Co>
            <Gr>Internet of Things</Gr>
            <Lo>San Jose, CA</Lo>
          </Row>
          <Industry>Graduate School</Industry>
          <Row>
            <Na>David Javidzad</Na>
            <Co>University of Southern California</Co>
            <Gr>Gould School of Law</Gr>
            <Lo>Los Angeles, CA</Lo>
          </Row>
        </TableContainer>

        <CareerHeader className="pt-1" altStyle>2017 Internships</CareerHeader>
        <TableContainer>
          <Label>
            <Na>NAME</Na>
            <Co>COMPANY</Co> 
            <Gr>GROUP</Gr>
            <Lo>LOCATION</Lo>
          </Label>
          <Industry>MARKETING</Industry>
          <Row>
            <Na>Clevian Hsia</Na>
            <Co>Flex</Co>
            <Gr>Marketing</Gr>
            <Lo>Milpitas, CA</Lo>
          </Row>
          <Row>
            <Na>Jon Duan</Na>
            <Co>Badger&G</Co>
            <Gr>Sales</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Yixuan Lu</Na>
            <Co>Stessa</Co>
            <Gr>Content Marketing</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Industry>CONSULTING</Industry>
          <Row>
            <Na>Justin Tan</Na>
            <Co>BDO</Co>
            <Gr>Management Consulting</Gr>
            <Lo>Singapore</Lo>
          </Row>
          <Row>
            <Na>Kelvin Xu</Na>
            <Co>PwC</Co>
            <Gr>Management Consulting</Gr>
            <Lo>Shanghai, China</Lo>
          </Row>
          <Industry>FINANCE</Industry>
          <Row>
            <Na>Connor Smith</Na>
            <Co>Merrill Lynch</Co>
            <Gr>Wealth Management</Gr>
            <Lo>Los Angeles, CA</Lo>
          </Row>
          <Row>
            <Na>Kevin Lee</Na>
            <Co>ACG</Co>
            <Gr>Tax</Gr>
            <Lo>Pleasanton, CA</Lo>
          </Row>
          <Row>
            <Na>Kevin Phan</Na>
            <Co>Grant Thorton</Co>
            <Gr>Risk Advisory</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Kyle Lu</Na>
            <Co>IdeaTree</Co>
            <Gr>Finance</Gr>
            <Lo>Los Angeles, CA</Lo>
          </Row>
          <Row>
            <Na>Nancy Zhu</Na>
            <Co>KPMG</Co>
            <Gr>Business Valuations</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Peter Vu</Na>
            <Co>Bridgewater Associates</Co>
            <Gr>Management</Gr>
            <Lo>Wesport, CT</Lo>
          </Row>
          <Row>
            <Na>Rushil Desai</Na>
            <Co>Alliant Insurance Services</Co>
            <Gr>Corporate Development</Gr>
            <Lo>Los Angeles, CA</Lo>
          </Row>
          <Row>
            <Na>Sean Yu</Na>
            <Co>Macquire Group</Co>
            <Gr>Asset Management</Gr>
            <Lo>Makati, Philippines</Lo>
          </Row>
          <Row>
            <Na>Taylor Lee</Na>
            <Co>EY</Co>
            <Gr>Audit</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Industry>TECHNOLOGY</Industry>
          <Row>
            <Na>Aaron Corona</Na>
            <Co>Core Logic</Co>
            <Gr>Product Management</Gr>
            <Lo>Oakland, CA</Lo>
          </Row>
          <Row>
            <Na>Akshay Madane</Na>
            <Co>Ondot Systems</Co>
            <Gr>Product Management</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Howard Huang</Na>
            <Co>BNP Paribas</Co>
            <Gr>Product Management</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Kailin Li</Na>
            <Co>Target</Co>
            <Gr>Product Design</Gr>
            <Lo>Alameda, CA</Lo>
          </Row>
          <Row>
            <Na>Max Seltzer</Na>
            <Co>CBS Interactive</Co>
            <Gr>Product Management</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Nick Cheng</Na>
            <Co>Shopee</Co>
            <Gr>UI/UX</Gr>
            <Lo>Tapei, Taiwan</Lo>
          </Row>
          <Row>
            <Na>Rahul Rangnekar</Na>
            <Co>Quant Five</Co>
            <Gr>Software Development</Gr>
            <Lo>Berkeley, CA</Lo>
          </Row>
          <Row>
            <Na>Varsha Sundar</Na>
            <Co>Bahwan Cybertek</Co>
            <Gr>Information Technology</Gr>
            <Lo>Santa Clara, CA</Lo>
          </Row>
          <Industry>VENTURE CAPITAL</Industry>
          <Row className="mb-1q">
            <Na>Catie Fan</Na>
            <Co>Oriza Ventures</Co>
            <Gr>Early Stage</Gr>
            <Lo>Santa Clara, CA</Lo>
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