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
          <IntLink to="/careers2017" altStyle>2017</IntLink>
          <IntLink to="/careers2016" altStyle>2016</IntLink>
          <PageLink to="/careers2015" altStyle>2015</PageLink> |
        </NavYearBar>

        <CareerHeader altStyle>2015 Full-Time</CareerHeader>
        <TableContainer className="mb-0 pb-2">
          <Label>
            <Na>NAME</Na>
            <Co>COMPANY</Co> 
            <Gr>GROUP</Gr>
            <Lo>LOCATION</Lo>
          </Label>
          <Industry>MARKETING</Industry>
          <Row>
            <Na>Liliana Muñoz</Na>
            <Co>Oracle</Co>
            <Gr>Customer Experience Solutions</Gr>
            <Lo>Redwood City, CA</Lo>
          </Row>
          <Row>
            <Na>Sabrina Ruiz</Na>
            <Co>HBO</Co>
            <Gr>Corporate Communications</Gr>
            <Lo>New York, NY</Lo>
          </Row>
          <Industry>CONSULTING</Industry>
          <Row>
            <Na>Brian Ly</Na>
            <Co>Accenture</Co>
            <Gr>Technology Consulting</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Judy Fang</Na>
            <Co>Infosys</Co>
            <Gr>Management Consulting</Gr>
            <Lo>Newark, CA</Lo>
          </Row>
          <Industry>FINANCE</Industry>
          <Row>
            <Na>Sarah Virani</Na>
            <Co>Adobe</Co>
            <Gr>Financial Planning & Analysis</Gr>
            <Lo>Redwood City, CA</Lo>
          </Row>
          <Industry>Technology</Industry>
          <Row>
            <Na>Anh Thai</Na>
            <Co>Crowe Horwath LLP</Co>
            <Gr>Information Security</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Industry>HUMAN RESOURCES</Industry>
          <Row>
            <Na>Kelly Chao</Na>
            <Co>Target</Co>
            <Gr>HR</Gr>
            <Lo>Pinole, CA</Lo>
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