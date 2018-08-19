import React, { Component } from 'react';

// node modules
import { connect } from 'react-redux';
import styled from 'styled-components';

// components
import { PageHeader, SectionHeader } from '../../components/HeaderStyles';
import CareersTable from './CareersTable';
import { FULLTIME_COLUMNS } from './fulltime_constants';

// actions
import { getFulltimesIfNeeded } from '../../../actions/data';

class Careers extends Component {
  componentDidMount() {
    document.title = 'Careers - Pi Sigma Epsilon | Zeta Chi Chapter';
    this.getFulltimes();
  }

  getFulltimes = async () => {
    await this.props.getFulltimes();
  };

  render() {
    const { fulltimes } = this.props.data;
    return (
      <div id="careers-container">
        <PageHeader>Careers</PageHeader>
        <TableContainer className="m-0 mb-2 p-0">
          <SectionHeader altStyle>Full-Time</SectionHeader>
          <CareersTable
            id="fulltime-table"
            columns={FULLTIME_COLUMNS}
            data={fulltimes.data}
          />
        </TableContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fulltimes: state.dataReducer.fulltimes,
  internship: state.dataReducer.internships
});

const mapDispatchToProps = dispatch => ({
  getFulltimesIfNeeded: dispatch(getFulltimesIfNeeded())
  // TODO: add fetchInternshipsIfNeeded
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Careers);

const TableContainer = styled.div`
  overflow-x: scroll;
`;
