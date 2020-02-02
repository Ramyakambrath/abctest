import React, { useState } from 'react';
import styled from 'styled-components';
import SimpleTable from '../Table/SimpleTable';



export default function CustomizeColumns() {

   const headCells = [
        { id: 'id', numeric: false, disablePadding: false, label: 'ID' },
        { id: 'numeric', numeric: false, disablePadding: false, label: 'NUMERIC' },
        { id: 'disablePadding', numeric: false, disablePadding: false, label: 'DISABLE PADDING' },
        { id: 'label', numeric: false, disablePadding: false, label: 'LABEL' },
        { id: 'checked', numeric: false, disablePadding: false, label: 'CHECKED' },
        { id: 'view', numeric: false, disablePadding: false, label: 'VIEW' },

    ];

    const rows=[{id:'test',numeric:'false',disablePadding:'true',label:'testcccc',checked:'true',view:'Items'},
    {id:'test',numeric:'false',disablePadding:'true',label:'testcccc',checked:'true',view:'Items'},
    {id:'test',numeric:'false',disablePadding:'true',label:'testcccc',checked:'true',view:'Items'},
    {id:'test',numeric:'false',disablePadding:'true',label:'testcccc',checked:'true',view:'Items'},
    {id:'test',numeric:'false',disablePadding:'true',label:'testcccc',checked:'true',view:'Items'},
    {id:'test',numeric:'false',disablePadding:'true',label:'testcccc',checked:'true',view:'Items'}
    ]

    const pageTitle='Column Preferences'
    // const headerLabels =[];
    //  headCells.map((val,i) => {
       
    //     let key=val.id
       
    //     headerLabels.push(key)
      
    //     });
    
       

    return (
        <React.Fragment>
            <SimpleTable headCells={headCells} rows={rows} pageTitle={pageTitle}/>
        </React.Fragment>
    )
}
