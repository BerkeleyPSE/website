import React, { Component } from 'react';

// node modules
import { connect } from 'react-redux';
import styled from 'styled-components';

// components
import { PageHeader, SectionHeader } from '../../components/HeaderStyles';
import CareersTable from './CareersTable';
import Loader from '../../components/Loader';
import FULLTIME_COLUMNS from '../../../constants/fulltimeColumns';

// actions
import { getFulltimes } from '../../../actions/data';

class Careers extends Component {
  componentDidMount() {
    document.title = 'Careers - Pi Sigma Epsilon | Zeta Chi Chapter';
    this.getFulltimes();
  }

  getFulltimes = async () => await this.props.getFulltimes();

  render() {
    const { fulltimes } = this.props;
    return (
      <div id="careers-container">
        <PageHeader>Careers</PageHeader>
        {fulltimes.loading ? (
          <Loader />
        ) : (
          <TableContainer className="m-0 mb-2 p-0">
            <SectionHeader altStyle>Full-Time</SectionHeader>
            <CareersTable
              id="fulltime-table"
              columns={FULLTIME_COLUMNS}
              data={fulltimes.data}
            />
          </TableContainer>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fulltimes: state.data.fulltimes,
  internship: state.data.internships
});

export default connect(
  mapStateToProps,
  { getFulltimes }
)(Careers);

const TableContainer = styled.div`
  overflow-x: scroll;
`;
