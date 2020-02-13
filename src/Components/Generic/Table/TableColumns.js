import React, { Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export default function TableColumns({ headCells, getActiveColumns,handlecustomColumns,...props }) {

    

    const checkboxItems ={};
     headCells.map((val,i) => {
        let obj = {};
        let key=val.label
        let value=val.checked
        obj[key] = value;
        Object.assign(checkboxItems,obj);
      
		});
    const [checkedItems, setChecked] = React.useState(checkboxItems);
    

    const MyDiv = styled.div`

 
    border: 1px solid #dadada;
    position:absolute;
    z-index: 1000;
    cursor: pointer; 
    background-color: #fff; 


    .MuiTypography-body2{
        font-size:.6rem;
        vertical-align:center;
  
    }
    .footer{
position: sticky;
bottom: 100;
right: 0;
left: 0;
padding: 10px;
background-color: #fff;
border-top: 1px solid #eee;
    }
`

const handleChange=(e)=>{
  // const item = e.target.value;
    const isChecked = e.target.checked;
    setChecked(({ ...checkedItems,[e.target.value]: isChecked}));
}
const onSave=()=>{
    getActiveColumns(checkedItems);
    handlecustomColumns();
}

const onCancel=()=>{
    handlecustomColumns();
}

    return (
        <Fragment>
            <MyDiv className='listItems'>
                <List style={{ maxHeight: '400px', overflow: 'auto' }}>
                    {headCells.map(item => {
                        const labelId = `checkbox-list-label-${item.label}`;       
                        return (
                            <ListItem dense button style={{ verticalAlign: 'middle', maxHeight: '30px' }} key={item.id}>
                                <ListItemIcon style={{ minWidth: '20px', marginTop:'-10px'}}>
                                    <Checkbox
                                        edge="start"
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                        style={{ width: '15px', height: '15px' }}
                                        checked={checkedItems[item.label]}
                                        onChange={handleChange}
                                        value={item.label} 
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={item.label} />
                            </ListItem>
                        );
                    })}
                    <div className='footer'>
                        <Button variant="contained" style={{ backgroundColor: "#2fa3e6", color: 'white', lineHeight: '1.5', fontSize: '10px',minWidth:'50px',paddingRight:'0',paddingLeft:'0'  }} onClick={onSave}>
                            Save
                        </Button>
                        <Button variant="contained"  style={{  lineHeight: '1.5', fontSize: '10px' ,minWidth:'50px' ,paddingRight:'0',paddingLeft:'0',marginLeft:'25px'}} onClick={onCancel}>
                            Cancel
                        </Button>
                    </div>
                </List>

            </MyDiv>

        </Fragment>


    )
}
