import styled from 'styled-components';
import PropTypes from 'prop-types';

const ColumnContainer = styled.div`
  background-color: ${props => props.bgColor || 'inherit'};
  display: flex !important;
  flex-direction: column;
  align-items: ${props => props.ai || 'center'};
  justify-content: ${props => props.jc || 'center'};
`;

const RowContainer = styled.div`
  background-color: ${props => props.bgColor || 'inherit'};
  display: flex !important;
  flex-direction: row;
  flex-wrap: ${props => props.fw || 'wrap'};
  align-items: ${props => props.ai || 'center'};
  justify-content: ${props => props.jc || 'center'};
`;

export { ColumnContainer, RowContainer };

ColumnContainer.propTypes = {
  bgColor: PropTypes.string
};

RowContainer.propTypes = {
  bgColor: PropTypes.string
};
