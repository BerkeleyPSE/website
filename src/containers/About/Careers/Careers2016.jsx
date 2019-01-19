import React from 'react';

// node modules
import styled from 'styled-components';

// components
import { PageHeader, SectionHeader } from '../../components/HeaderStyles';
import { RowContainer, ColumnContainer } from '../../components/ContainerStyles';
import { IntButtonLink, ExtButtonLink } from '../../components/LinkStyles';

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
        <NavYearBar>
          <Year>YEAR:</Year> 
          <IntLink to="/careers2019" altStyle>2019</IntLink>
          <IntLink to="/careers2018" altStyle>2018</IntLink>
          <IntLink to="/careers2017" altStyle>2017</IntLink>
          <IntLink className="careerPage" to="/careers2016" altStyle>2016</IntLink>
          <IntLink to="/careers2015" altStyle>2015</IntLink>
        </NavYearBar>

        <CareerHeader altStyle>2016 Full-Time</CareerHeader>
        <TableContainer className="mb-0 pb-2">
          <Label>
            <Na>NAME</Na>
            <Co>COMPANY</Co> 
            <Gr>GROUP</Gr>
            <Lo>LOCATION</Lo>
          </Label>
          <Industry>MARKETING</Industry>
          <Row>
            <Na>Sara Lim</Na>
            <Co>QuinStreet</Co>
            <Gr>Enterprise Media</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Peggy Lin</Na>
            <Co>Smule</Co>
            <Gr>User Acquistion</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Industry>FINANCE</Industry>
          <Row>
            <Na>Cynthia Huang</Na>
            <Co>J.P.Morgan</Co>
            <Gr>Private Bank</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Farhan Lokman</Na>
            <Co>Bank Negara</Co>
            <Gr>SME Financing</Gr>
            <Lo>Kuala Lumpur, Malaysia</Lo>
          </Row>
          <Row>
            <Na>Hiu Ngan</Na>
            <Co>Bank of America Merrill Lynch</Co>
            <Gr>General Advisory</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Lydia Kim</Na>
            <Co>McKinsey & Company</Co>
            <Gr>Finalta</Gr>
            <Lo>Chicago, IL</Lo>
          </Row>
        <Industry>Technology</Industry>
          <Row>
            <Na>Kent Chen</Na>
            <Co>SoCal Gas</Co>
            <Gr>Management Associate Rotation</Gr>
            <Lo>Los Angeles, CA</Lo>
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

const Year = styled.div`
  font-size: 0.75rem;
  font-weight:600;
  letter-spacing:0.125em;
  margin: 0.625rem;
  padding: 0.125rem;
  color:#818181;
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
    color: #895fad;
     border:none;
     border-bottom:solid;
     border-bottom-width: 0.1rem;
  }
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