import React from 'react';

// node modules
import styled from 'styled-components';
import PropTypes from 'prop-types';

//table module imports
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Dessert (100g serving)</CustomTableCell>
            <CustomTableCell align="right">Calories</CustomTableCell>
            <CustomTableCell align="right">Fat (g)</CustomTableCell>
            <CustomTableCell align="right">Carbs (g)</CustomTableCell>
            <CustomTableCell align="right">Protein (g)</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow className={classes.row} key={row.id}>
              <CustomTableCell component="th" scope="row">
                {row.name}
              </CustomTableCell>
              <CustomTableCell align="right">{row.calories}</CustomTableCell>
              <CustomTableCell align="right">{row.fat}</CustomTableCell>
              <CustomTableCell align="right">{row.carbs}</CustomTableCell>
              <CustomTableCell align="right">{row.protein}</CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);

// const CareersTable = props => {
//   const columnHeaders = (
//     <Row className="m-0">
//       {Object.values(props.columns).map((col, index) => {
//         return (
//           <ColumnHeader
//             className="m-0 py-0q px-0"
//             key={`${props.id}_col_${index}`}
//           >
//             {col}
//           </ColumnHeader>
//         );
//       })}
//     </Row>
//   );

//   const tableRows = props.data.map((person, index) => {
//     return (
//       <Row className="m-0" key={`${props.id}_row_${index}`} index={index}>
//         {Object.keys(props.columns).map((col, index) => {
//           return (
//             <Cell
//               className="m-0 py-0h px-0q"
//               key={`${props.id}_${person.name}_${col}`}
//             >
//               {person[col] || ''}
//             </Cell>
//           );
//         })}
//       </Row>
//     );
//   });

//   return (
//     <CTable cellPadding="0" cellSpacing="0">
//       <tbody>
//         {columnHeaders}
//         {tableRows}
//       </tbody>
//     </CTable>
//   );
// };

// export default CareersTable;

const CTable = styled.table`
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
  text-transform: uppercase;
`;

const Row = styled.tr`
  background-color: ${props => props.index % 2 === 0 && '#EEE'};
  overflow: scroll;
`;

const Cell = styled.td`
  font-size: 0.9rem;
  letter-spacing: 0.0125rem;
  min-width: 150px;
`;

// PropTypes

// CareersTable.propTypes = {
//   columns: PropTypes.objectOf(PropTypes.string),
//   data: PropTypes.arrayOf(PropTypes.object)
// };

// Row.propTypes = {
//   index: PropTypes.number
// };
