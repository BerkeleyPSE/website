import React, { Component } from 'react';

// node modules
import { connect } from 'react-redux';
import styled from 'styled-components';

// components
import { PageHeader, SectionHeader } from '../../components/HeaderStyles';
import { RowContainer, ColumnContainer } from '../../components/ContainerStyles';
import { ParaText } from '../../components/TextStyles';
import Loader from '../../components/Loader';

// actions
import { getFulltimes } from '../../../actions/data';

const Careers = () => {
  document.title = 'Careers - Pi Sigma Epsilon | Zeta Chi Chapter';

  return (
    <div id="careers-container">
      <RowContainer>
        <Image
          src="http://res.cloudinary.com/berkeleypse-tech/image/upload/f_auto,fl_force_strip,q_auto:best/campanile"
          alt="Pi Sigma Epsilon brotherhood"
        />
        <Header className="py-2 px-0" altStyle>
          Careers
        </Header>
      </RowContainer>
      <DataContainer>
        <NavYearBar>
          <ul><strong>2019</strong></ul>
          <ul>2018</ul>
          <ul>2017</ul>
          <ul>2016</ul>
          <ul>2015</ul>
        </NavYearBar>

        <CareerHeader altStyle>Full-Time</CareerHeader>
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
            <Gr>Management Consulting</Gr>
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
        </TableContainer>

        <CareerHeader altStyle>Internships</CareerHeader>
        <TableContainer>
          <Label>
            <Na>NAME</Na>
            <Co>COMPANY</Co> 
            <Gr>GROUP</Gr>
            <Lo>LOCATION</Lo>
          </Label>
          <Industry>MARKETING</Industry>
          <Row>
            <Na>Rose Min</Na>
            <Co>P&G</Co>
            <Gr>Sales</Gr>
            <Lo>-</Lo>
          </Row>
          <Row>
            <Na>Vivan Hong</Na>
            <Co>IBM</Co>
            <Gr>Solutions Sales Summit Program</Gr>
            <Lo>-</Lo>
          </Row>
          <Industry>CONSULTING</Industry>
          <Row>
            <Na>Catie Fan</Na>
            <Co>Bain & Company</Co>
            <Gr>Management Consulting</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Clevian Hsia</Na>
            <Co>PwC</Co>
            <Gr>Forensic Technology Solutions</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Kian Kiasaleh</Na>
            <Co>Deloitte</Co>
            <Gr>Human Capital Consulting</Gr>
            <Lo>New York, NY</Lo>
          </Row>
          <Row>
            <Na>Varsha Sundar</Na>
            <Co>Accenture</Co>
            <Gr>Management Consulting</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Industry>FINANCE</Industry>
          <Row>
            <Na>Cathy An</Na>
            <Co>Abbott</Co>
            <Gr>-</Gr>
            <Lo>-</Lo>
          </Row>
          <Row>
            <Na>Gabriel Duarte</Na>
            <Co>Deloitte</Co>
            <Gr>Pioneer Internship</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Harika Kalluri</Na>
            <Co>AllianceBernstein</Co>
            <Gr>Equity Research</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row>
            <Na>Andrew Zhou</Na>
            <Co>BDO</Co>
            <Gr>Tax</Gr>
            <Lo>San Francisco, CA</Lo>
          </Row>
          <Row className="mb-1q">
            <Na>Liona Li</Na>
            <Co>Wells Fargo</Co>
            <Gr>Consumer Lending Intern</Gr>
            <Lo>Sioux Falls, SD</Lo>
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

const InfoText = ParaText.extend`
  margin: 1rem;
`;

const TableContainer = styled.div`
  width:80vw;
  padding: 0.75rem 1rem 1.5rem 0rem;
  text-align: left;
  color: ${props => (props.altStyle ? '#FFF' : '#333')};
  font-size: 1.125rem;
  margin: 0.25rem 0;
`;

const DataContainer = ColumnContainer.extend`
  width:80vw;
  margin:auto;
  align-items:flex-start;
`;

const NavYearBar = RowContainer.extend`
  position:relative;
  left:65%;
  padding-top:20px;
`;

const CareerHeader = SectionHeader.extend`
  position:relative
  padding-bottom:0.5rem;
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
  width:25%;
`;

const Gr = styled.div`
  width:35%;
`;

const Lo = styled.div`
  width:15%;
`;