import React from 'react';

// node modules
import styled from 'styled-components';
import PropTypes from 'prop-types';
import isArray from 'lodash/isArray';
import isString from 'lodash/isString';

import { isValid } from '../../helpers';

// components
import { RowContainer } from '../components/ContainerStyles';

// constants
const INFO_MAP = {
  year: 'Year',
  hometown: 'Hometown',
  class: 'Class',
  major: 'Major',
  minor: 'Minor',
  careerInterests: 'Career Interests',
  previousPositions: 'Previous Positions'
};

const BrotherTable = props => {
  const parseValue = value => {
    if (isArray(value)) return value.join(', ');
    if (isString(value)) return value;
    return null;
  };

  return (
    <TableContainer>
      {Object.entries(INFO_MAP).map(item => {
        const [key, title] = item;
        const value = props[key];
        if (isValid(value)) {
          return (
            <Row key={`${props.name}_${key}`}>
              <Title className="m-0">{title}</Title>
              <Value className="m-0">{parseValue(value)}</Value>
            </Row>
          );
        } else {
          return null;
        }
      })}
    </TableContainer>
  );
};

export default BrotherTable;

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

const Row = RowContainer.extend`
  flex-wrap: nowrap;
  border-bottom: 1px solid #333;
  justify-content: space-between;
  padding: 0.5rem 0;
`;

const Title = styled.p`
  color: #895fad;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.025rem;
  padding: 0 0.625rem;
  text-align: left;
  text-transform: uppercase;
`;

const Value = styled.p`
  color: #818181;
  font-size: 1rem;
  padding: 0 0.625rem;
  text-align: right;
`;

// PropTypes
BrotherTable.propTypes = {
  year: PropTypes.number,
  hometown: PropTypes.string,
  class: PropTypes.string,
  major: PropTypes.arrayOf(PropTypes.string),
  minor: PropTypes.arrayOf(PropTypes.string),
  careerInterests: PropTypes.arrayOf(PropTypes.string),
  previousPositions: PropTypes.arrayOf(PropTypes.string)
};
