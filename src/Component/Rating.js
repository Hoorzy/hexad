import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';

import Movies from '../Movies.json'
import { checkServerIdentity } from 'tls';
import TextField from '@material-ui/core/TextField';


const columns = [
  { id: 'name', label: 'Movie', minWidth: 170 },
  { id: 'rating', label: 'Rating', minWidth: 100 },
  {
    id: 'edit',
    label: 'Edit',
    minWidth: 50,
    align: 'center',
    // format: value => value.toLocaleString(),
  },

];
var currentlyEditing = true
var i = 3 

function createData(name, rating , edit) {
    return { name, rating , edit};
  }
  var arr=[]
  Object.keys(Movies.data).map(key => {  
    arr.push(createData(Movies.data[key].movie , Movies.data[key].rating ))
  })


const rows = arr ; 

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}


            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row , index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>

                        {column.id === 'edit' && !currentlyEditing ?
                         <EditIcon onClick={()=>{

                            //  startEditing()
                             alert("Hoorie" + index  ) 

                            }} />
                         : column.id === 'edit' && currentlyEditing && index === i ? 
                         <CheckIcon onClick={()=>{

                            //  stopEditing()
                             alert("Hoorie" + index  ) 

                            }} />

                        : column.id === 'rating' && currentlyEditing && index === i? 
                         <TextField 
                         name = {column.id}
                        //  onChange ={handelChange}
                         value = {value}
                        
                          />
                            :value}
                        {/* {value} */}
                      </TableCell>
                    //   <TableCell> <EditIcon/> </TableCell>
                    );
                  })}

                  
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
