import React, { Component } from 'react';

// node modules
import { connect } from 'react-redux';
import styled from 'styled-components';

// components
import { PageHeader, SectionHeader } from '../../components/HeaderStyles';
import CareersTable from './CareersTable';
import { FULLTIME_COLUMNS } from './fulltime_constants';

// actions
import { DataActions } from '../../../actions/data-actions.js';

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

const mapStateToProps = (state, ownProps) => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  DataActions
)(Careers);

const TableContainer = styled.div`
  overflow-x: scroll;
`;
