import React from "react";

// node modules
import styled from "styled-components";
import PropTypes from "prop-types";

const CareersTable = props => {
  const columnHeaders = (
    <Row>
      {Object.values(props.columns).map((col, index) => {
        return (
          <ColumnHeader key={`${props.id}_col_${index}`}>{col}</ColumnHeader>
        );
      })}
    </Row>
  );

  const tableRows = props.data.map((person, index) => {
    return (
      <Row key={`${props.id}_row_${index}`} index={index}>
        {Object.keys(props.columns).map((col, index) => {
          return (
            <Cell key={`${props.id}_${person.name}_${col}`}>
              {person[col] || ""}
            </Cell>
          );
        })}
      </Row>
    );
  });

  return (
    <Table cellPadding="0" cellSpacing="0">
      <tbody>
        {columnHeaders}
        {tableRows}
      </tbody>
    </Table>
  );
};

export default CareersTable;

const Table = styled.table`
  border: none;
  border-top: 1px solid #eee;
  width: 100%;
`;

const ColumnHeader = styled.th`
  border: none;
  border-bottom: 3px solid #895fad;
  color: #333;
  font-family: Lato, sans-serif;
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: 0.025rem;
  margin: 0;
  padding: 0.25rem 0;
  text-transform: uppercase;
`;

const Row = styled.tr`
  background-color: ${props => props.index % 2 === 0 && "#EEE"};
  margin: 0;
  overflow: scroll;
`;

const Cell = styled.td`
  font-size: 0.9rem;
  letter-spacing: 0.0125rem;
  margin: 0;
  padding: 0.5rem 0.25rem;
  min-width: 150px;
`;

// PropTypes

CareersTable.propTypes = {
  columns: PropTypes.objectOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.object)
};

Row.propTypes = {
  index: PropTypes.number
};
