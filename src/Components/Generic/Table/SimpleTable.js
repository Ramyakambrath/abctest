import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Tooltip } from '@material-ui/core';
import { filterOBject } from '../../../HelperFunctions/helper'
import TableColumns from './TableColumns'
import ViewColumnOutlinedIcon from '@material-ui/icons/ViewColumnOutlined';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TablePagination from '@material-ui/core/TablePagination';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';



function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}
function getSorting(order, orderBy) {
    return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

function EnhancedTableHead(props) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, headCells } = props;
    const [showCustomColumns, setCustomColumns] = useState(false);
    const [activeColumnsList, setActiveColumnsList] = useState([]);

    const createSortHandler = property => event => {
        onRequestSort(event, property);
    };

    const handlecustomColumns = () => {
        setCustomColumns(!showCustomColumns)
    }

    const getActiveColumns = (columnList) => {

        const activeList = Object.keys(filterOBject(columnList, column => column === true));
        setActiveColumnsList(activeList);

    }

    return (
        <TableHead>
            <TableRow>
                <TableCell className={classes.MuiTableCell} scope="row" size='medium'>
                    <div className={classes.viewColumn}>
                        <Tooltip title="Customize Columns" aria-label="Customize Columns" placement="right-start">
                            <ViewColumnOutlinedIcon className={classes.columnSvg} onClick={handlecustomColumns} style={{ position: 'absolute', paddingLeft: '.2rem' }} />
                        </Tooltip>
                    </div>
                    {showCustomColumns ? <TableColumns headCells={headCells} getActiveColumns={getActiveColumns} handlecustomColumns={handlecustomColumns} /> : null}
                </TableCell>
                <TableCell className={classes.MuiTableCell} padding="checkbox">
                    <Checkbox className={classes.MuiCheckbox}
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ 'aria-label': 'select all items' }}
                        icon={<CheckBoxOutlineBlankIcon className={classes.MuiSvgIcon} style={{ background: '#f5f5f5', color: '#bdbdbd', boxShadow: 'inset -1px 3px 8px 5px #f5f5f5, 2px 5px 16px 0px #f5f5f5, 5px 5px 15px 5px rgba(0,0,0,0)' }} />}
                    />
                </TableCell>
                {headCells.map((header, i) => (
                    <TableCell
                        key={header.id}
                        padding={header.disablePadding ? 'none' : 'default'}
                        className={classes.MuiTableCell}
                        align={header.numeric ? 'right' : 'left'}
                        sortDirection={orderBy === header.id ? order : false}
                        style={{ overflow: 'hidden', whiteSpace: 'nowrap', maxWidth: '100%', paddingLeft: i > 0 ? '100px' : '0px' }}>
                        

                        <TableSortLabel
                            active={orderBy === header.id}
                            direction={orderBy === header.id ? order : 'asc'}
                            onClick={createSortHandler(header.id)}
                        >
                            {header.label}
                            {orderBy === header.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};
const useToolbarStyles = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    title: {
        flex: '1 1 100%',
        fontSize: '20px',
        fontWeight: '300',
        color:'#444',
        'fontFamily':'Proxima Nova,"Source Sans Pro",Helvetica,Arial,sans-serif',
    },
}));

const EnhancedTableToolbar = props => {
    const classes = useToolbarStyles();
    const { numSelected,pageTitle } = props;

    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            {numSelected > 0 ? (
                <Typography className={classes.title} color="inherit" variant="subtitle1">
                    {numSelected} selected
          </Typography>
            ) : (
                    <Typography className={classes.title} variant="h6" id="tableTitle">
                        {pageTitle}
          </Typography>
                )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                    <Tooltip title="Filter list">
                        <IconButton aria-label="filter list">
                            <FilterListIcon />
                        </IconButton>
                    </Tooltip>
                )}
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles(theme=>({
    
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },

    MuiTableCell: {
        fontSize: '.6rem',
        verticalAlign: 'top'

    },

    MuiSvgIcon: {
        position: 'relative',
        width: '.6em',
        height: '.6em',

    },
    MuiCheckbox: {
        paddingTop: '1.2rem'
    },

    viewColumn: {
        flex: '0 0 auto',
        paddingRight: '20px',
        paddingTop: '0px',
        width: '10px',
        height: '25px',
        color: 'rgba(0, 0, 0, 0.54)',
        alignItems: 'center',
        fontSize: '1.5rem',
        textAlign: 'center',
        cursor: 'pointer',
        overflow: 'visible',
        transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        position: 'relative',
        borderRadius: '50%'

    },
    columnSvg: {
        position: 'relative',
        width: '.8em',
        height: '.8em',
    },
    listItems: {
        zIndex: '1'
    },

    header: {
        fontSize: '.6rem',
        ['@media (min-width: 600px)']: {
            width: 'calc(100% - 180px)',
            marginLeft: '180px'
        },
        paddingLeft: '10px'

    },
    table: {
        minWidth: 600,
    },



}));


export default function SimpleTable({ headCells, rows, pageTitle }) {
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);



    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = event => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n,i) => Object.values(n)[i]);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };
    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = event => {
        setDense(event.target.checked);
    };

    const isSelected = name => selected.indexOf(name) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);


    return (
        <div className={classes.header}>
            <Paper className={classes.paper}>
                <EnhancedTableToolbar numSelected={selected.length} pageTitle={pageTitle}/>
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                        aria-label="enhanced table"
                    >
                        <EnhancedTableHead
                            classes={classes}
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                            headCells={headCells}
                        />
                        <TableBody>
                            {stableSort(rows, getSorting(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(Object.values(row)[index]);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={event => handleClick(event, Object.values(row)[index])}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={Object.values(row)[index]}
                                            selected={isItemSelected}
                                        >
                                        <TableCell></TableCell>
                                            <TableCell padding="checkbox" >
                                                <Checkbox
                                                    checked={isItemSelected}
                                                    inputProps={{ 'aria-labelledby': labelId }} 
                                                    icon={<CheckBoxOutlineBlankIcon className={classes.MuiSvgIcon} style={{ background: '#f5f5f5', color: '#bdbdbd', boxShadow: 'inset -1px 3px 8px 5px #f5f5f5, 2px 5px 16px 0px #f5f5f5, 5px 5px 15px 5px rgba(0,0,0,0)'}} />}                            
                                                />
                                            </TableCell>
                                            {Object.keys(row).map((keyName, j) =>
                                            <TableCell 
                                               align={row.numeric ? 'right' : 'left'}
                                               component="th" id={labelId} scope="row" padding="none"
                                               style={{ overflow: 'hidden', whiteSpace: 'nowrap', maxWidth: '100%',paddingLeft: j > 0 ? '100px' : '0.5px'  }}>
                                               {Object.values(row)[j]}
                                            </TableCell>
                                            
                                         )}
                                       
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
}