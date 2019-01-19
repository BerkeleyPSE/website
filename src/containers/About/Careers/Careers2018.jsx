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
          <PageLink to="/careers2018" altStyle>2018</PageLink>
          <IntLink to="/careers2017" altStyle>2017</IntLink>
          <IntLink to="/careers2016" altStyle>2016</IntLink>
          <IntLink to="/careers2015" altStyle>2015</IntLink> | 
        </NavYearBar>

        <CareerHeader altStyle>2018 Full-Time</CareerHeader>
        <TableContainer className="mb-0 pb-1">
          <Label>
            <Na>NAME</Na>
            <Co>COMPANY</Co> 
            <Gr>GROUP</Gr>
            <Lo>LOCATION</Lo>
          </Label>
          <Industry>MARKETING</Industry>
          <Row>
            <Na>Jon Duan</Na>
            <Co>IBM</Co>
            <Gr>Sales</Gr>
            <Lo>Dallas, TX</Lo>
          </Row>
          <Row>
            <Na>Kailin Li</Na>
            <Co>Dolby Laboratories</Co>
            <Gr>Marketing Operations</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Nick Cheng</Na>
            <Co>Okta</Co>
            <Gr>Sales</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Industry>CONSULTING</Industry>
          <Row>
            <Na>Aaron Corona</Na>
            <Co>Accenture</Co>
            <Gr>Management Consulting</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Industry>FINANCE</Industry>
          <Row>
            <Na>Kevin Phan</Na>
            <Co>Wells Fargo Securities</Co>
            <Gr>Investment Banking</Gr>
            <Lo>Los Angeles</Lo>
          </Row>
          <Row>
            <Na>Nancy Zhu</Na>
            <Co>KPMG</Co>
            <Gr>Business Valuations</Gr>
            <Lo>San Francisco</Lo>
          </Row>
          <Row>
            <Na>Rushil Desai</Na>
            <Co>PNC</Co>
            <Gr>Corporate & Insitutional Banking</Gr>
            <Lo>Washington, DC</Lo>
          </Row>
          <Row>
            <Na>Taylor Lee</Na>
            <Co>EY</Co>
            <Gr>Audit</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Industry>Technology</Industry>
          <Row>
            <Na>Akshay Madane</Na>
            <Co>Credit Karma</Co>
            <Gr>Operations Strategy</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Max Seltzer</Na>
            <Co>Twitter</Co>
            <Gr>Ad Operations</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Peter Vu</Na>
            <Co>Stripe</Co>
            <Gr>Sales Strategy Operations</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Rahul Rangnekar</Na>
            <Co>ChannelMeter</Co>
            <Gr>Software Development</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Young Hoon Kim</Na>
            <Co>Cisco</Co>
            <Gr>Data Science</Gr>
            <Lo>San Jose, CA</Lo>
          </Row>
          <Industry>Technology</Industry>
          <Row>
            <Na>Syed Adil Putra</Na>
            <Co>Ekuinas</Co>
            <Gr>Investments</Gr>
            <Lo>Petaling Jaya, Malaysia</Lo>
          </Row>
        </TableContainer>

        <CareerHeader className="pt-1" altStyle>2018 Internships</CareerHeader>
        <TableContainer>
          <Label>
            <Na>NAME</Na>
            <Co>COMPANY</Co> 
            <Gr>GROUP</Gr>
            <Lo>LOCATION</Lo>
          </Label>
          <Industry>MARKETING</Industry>
          <Row>
            <Na>Charissa Saputra</Na>
            <Co>Oralce</Co>
            <Gr>Analyst Relations</Gr>
            <Lo>Redwood City, CA</Lo>
          </Row>
          <Row>
            <Na>Clevian Hsia</Na>
            <Co>Glassdoor</Co>
            <Gr>Marketing Programs</Gr>
            <Lo>Milpitas, CA</Lo>
          </Row>
          <Row>
            <Na>John Oh</Na>
            <Co>Anaplan</Co>
            <Gr>Customer Experience</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Linda Li</Na>
            <Co>Anheuser-Busch</Co>
            <Gr>Corporate Affairs</Gr>
            <Lo>New York, NY</Lo>
          </Row>
          <Row>
            <Na>Liona Li</Na>
            <Co>Curacubby</Co>
            <Gr>Customer Success</Gr>
            <Lo>Berkeley, CA</Lo>
          </Row>
          <Row>
            <Na>Reina Zhang</Na>
            <Co>Informa Telecoms & Media</Co>
            <Gr>Marketing</Gr>
            <Lo>San Francisco</Lo>
          </Row>
          <Row>
            <Na>Reshma Belur</Na>
            <Co>NG Inc.</Co>
            <Gr>Marketing</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Yixuan Lu</Na>
            <Co>IBM</Co>
            <Gr>Programmatic Marketing</Gr>
            <Lo>New York, NY</Lo>
          </Row>
          <Industry>Finance</Industry>
          <Row>
            <Na>Connor Smith</Na>
            <Co>Fidelity</Co>
            <Gr>Investment Management</Gr>
            <Lo>Santa Barbara, CA</Lo>
          </Row>
          <Row>
            <Na>Harika Kalluri</Na>
            <Co>AllianceBernstein</Co>
            <Gr>Equity Research</Gr>
            <Lo>New York, NY</Lo>
          </Row>
          <Row>
            <Na>Jason Zhou</Na>
            <Co>PwC</Co>
            <Gr>Risk Advisory</Gr>
            <Lo>Shanghai, China</Lo>
          </Row>
          <Row>
            <Na>Kevin Lee</Na>
            <Co>PwC</Co>
            <Gr>Tax</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Kelvin Xu</Na>
            <Co>Amber AI</Co>
            <Gr>Sales & Trading</Gr>
            <Lo>Shenzhen, China</Lo>
          </Row>
          <Row>
            <Na>Kian Kiasaleh</Na>
            <Co>National Securities Corporation</Co>
            <Gr>Investment Management</Gr>
            <Lo>Newport Beach, CA</Lo>
          </Row>
          <Row>
            <Na>Kyle Lu</Na>
            <Co>Houlihan Lokey</Co>
            <Gr>Financial Advisory</Gr>
            <Lo>Los Angeles, Ca</Lo>
          </Row>
          <Row>
            <Na>Rick Choi</Na>
            <Co>PwC</Co>
            <Gr>Risk Advisory</Gr>
            <Lo>Seoul, Korea</Lo>
          </Row>
          <Row>
            <Na>Sean Yu</Na>
            <Co>City Ventures</Co>
            <Gr>Land Acquisition</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Industry>Technology</Industry>         
          <Row>
            <Na>Abhi Nathan</Na>
            <Co>San Diego Gas & Electric</Co>
            <Gr>Information Technology</Gr>
            <Lo>San Diego, CA</Lo>
          </Row>
          <Row>
            <Na>Alex Dao</Na>
            <Co>Microsoft</Co>
            <Gr>Software Engineering</Gr>
            <Lo>Redmond, WA</Lo>
          </Row>
          <Row>
            <Na>Cathy An</Na>
            <Co>Incyte</Co>
            <Gr>Data Science</Gr>
            <Lo>Wilmington, DE</Lo>
          </Row>
          <Row>
            <Na>Emma Tsuneishi</Na>
            <Co>CoreLogic</Co>
            <Gr>Product Management</Gr>
            <Lo>Irvine, CA</Lo>
          </Row>
          <Row>
            <Na>Eva Su</Na>
            <Co>Wish</Co>
            <Gr>Analytics</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Jacqueline Tsang</Na>
            <Co>Symantec</Co>
            <Gr>Informa Technology</Gr>
            <Lo>Mountain View, CA</Lo>
          </Row>
          <Row>
            <Na>Joshua Nuesca</Na>
            <Co>Eko Devices</Co>
            <Gr>Marketing Analytics</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Justin Tan</Na>
            <Co>Theravance Biophama</Co>
            <Gr>Business Operations</Gr>
            <Lo>San Mateo, CA</Lo>
          </Row>
          <Row>
            <Na>Varsha Sundar</Na>
            <Co>Kaiser Permanente</Co>
            <Gr>Information Technology</Gr>
            <Lo>Pasadena, CA</Lo>
          </Row>
          <Industry>Private Equity</Industry>
          <Row className="mb-1q">
            <Na>Catie Fan</Na>
            <Co>Altamont Capital Partners</Co>
            <Gr>Growth Strategy</Gr>
            <Lo>Palo Alto, CA</Lo>
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