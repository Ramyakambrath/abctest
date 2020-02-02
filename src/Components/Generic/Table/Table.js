import React, { useState } from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import styled from 'styled-components';
import ViewColumnOutlinedIcon from '@material-ui/icons/ViewColumnOutlined';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TableColumns from './TableColumns'
import { Tooltip } from '@material-ui/core';
import {filterOBject} from '../../../HelperFunctions/helper'


const MyDiv = styled.div`


.MuiTableCell-root{
    font-size:.6rem;
    vertical-align:top;
    
}

.MuiSvgIcon-root{
    position:relative;
    width:.6em;
    height:.6em;
    color:
   
}

.MuiCheckbox-root {
   padding-top:1.2rem;
}
.viewColumn{
    flex: 0 0 auto;
    padding-right:20px;
    padding-top:3px;
    width:10px;
    height:25px;
    color: rgba(0, 0, 0, 0.54);
    align-items:center;
    font-size: 1.5rem;
    text-align: center;
    cursor:pointer;
    overflow: visible;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    position:relative;
    border-radius: 50%;

}
.viewColumn:hover{
  
 
    background:#eceff1;

   
   
  

}
@media (min-width: 600px) {
    width: calc(100% - 180px);
    margin-left: 180px;
  }

.listItems{
    z-index:1;
}
   
 
  `


export default function Table({headCells,...props}) {
    const [showCustomColumns, setCustomColumns] = useState(false);
    const [activeColumnsList, setActiveColumnsList]=  useState([]);

    const handlecustomColumns = () => {

        setCustomColumns(!showCustomColumns)

    }

    const getActiveColumns=(columnList)=>{

        const activeList=Object.keys(filterOBject(columnList,column =>column == true));
        setActiveColumnsList(activeList);
       
       }

    return (
        <MyDiv>
            <TableHead>
                <TableRow>
                    <TableCell  scope="row" size='medium'>
                        <div  className='viewColumn'>
                         <Tooltip title="Customize Columns" aria-label="Customize Columns" placement="right-start">
                        <ViewColumnOutlinedIcon onClick={handlecustomColumns} style={{position:'absolute',paddingTop:'.2rem',paddingLeft:'.2rem'}}/>
                        </Tooltip>
                        </div>
                        {showCustomColumns ?<TableColumns headCells={headCells} getActiveColumns={getActiveColumns} handlecustomColumns={handlecustomColumns}/>:null}
                    </TableCell>
                    <TableCell padding="checkbox"> 
                        <Checkbox
                            inputProps={{ 'aria-label': 'select all items' }}
                          icon={<CheckBoxOutlineBlankIcon style={{background:'#f5f5f5',color:'#bdbdbd',boxShadow: 'inset -1px 3px 8px 5px #f5f5f5, 2px 5px 16px 0px #f5f5f5, 5px 5px 15px 5px rgba(0,0,0,0)'}}/>}
                        />
                    </TableCell>
                    {headCells.map((headCell,i) => (          
                        activeColumnsList.includes(headCell.label) || activeColumnsList.length ==0? 
                        <TableCell component="th"
                            key={headCell.id}
                            align={headCell.numeric ? 'right' : 'left'}
                            style={{overflow:'hidden',whiteSpace:'nowrap',maxWidth:'100%',paddingLeft:i >0 ? '100px': '0.5px'}}>
                            {headCell.label}
                            {/* <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel> */}
                        </TableCell>
                        :null
                    ))}
                </TableRow>
            </TableHead>
        </MyDiv>
    )
}
