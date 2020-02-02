import React,{useRef, Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {  Divider } from '@material-ui/core';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import SettingsIcon from '@material-ui/icons/Settings';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { useOnClickOutside } from '../../../hooks';
import ClearIcon from '@material-ui/icons/Clear';
import AddValueToDropDown from './AddValueToDropDown';
import Popper from '@material-ui/core/Popper';


const useStyles = makeStyles(theme => ({

  input: {

    width: '95%',
    borderWidth: '0.5px',
    height: '25px',
   

    "&::placeholder": {
      textOverflow: "ellipsis !important",
      fontSize: '.7rem'
    }
  },
  input2:{
    width:'100%',
    fontSize:'.7em',
    borderRight: '0px hidden',
    borderTop: '0px hidden',
    borderBottom: '1px solid',
    borderLeft: '0px hidden',
    color:'#999',
    textAlign:'left',
    backgroundColor: 'hsl(0,0%,100%)',
    cursor:'pointer',
    bordercolor: 'hsl(0,0%,80%)',
   // borderRadius: '4px 0px 0px 4px',
   '&::placeholder': {
   
    color: 'rgba(0,0,0,0.36)'
  },

  '&:focus': {
    outline: "none",
    
  },
  
 
  },

  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
  },
  expand:{
    color:'#999',
    cursor:'pointer',
    borderRight: '0px hidden',
     borderTop: '0px hidden',
     borderBottom: '1px solid',
     borderLeft: '0px hidden',
     backgroundColor: 'hsl(0,0%,100%)',
     bordercolor: 'hsl(0,0%,80%)',
   //  borderRadius: '0px 4px 4px 0px',
   
   },
  icon:{

    width: '16px', 
    height: '16px',
    "& .MuiSvgIcon-root":{
      color:'white',
    }
  },
  settingsIcon:{
   

    "& .MuiSvgIcon-root":{
      color:'grey',
      width: '.8em', 
      height: '.8em',
    }
  },
  settingsText:{
    color:'#2a6496',
    fontSize:'.7em',
    '&:hover': {
      color: "grey",
      
    },
    "& .MuiTypography-body1": {
      fontSize: '.8rem',
      
    }

  },

  listText: {

    color: 'black',
      '&:hover': {
        color: "white",
        
      },

    "& .MuiTypography-body1": {
      fontSize: '.8em',
      
    }
  },
  list: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #e0e0e0',
    boxShadow: '0px 5px 15px 5px #bdbdbd',
    // position:'relative !important',
    // zIndex:'1000 !important',


  },
  listItem:{
    paddingTop: '0',
    paddingBottom: '0',
    background: "white",
      '&:hover': {
        background: "#2196f3",
        color:'white'
      }
    

  },
  hr:{
    alignSelf: 'stretch',
    width: 'auto',
  },
  label:{
    fontSize: '.8rem',
    color:'rgba(0, 0, 0, 0.54)',
    fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif'

  },
  divcontainer:{
    display:'flex',
    marginTop:'8px',
    '&:hover': {
      color: "black",
      borderBottom: '2px solid',
    },
   
  }

}))


const ListValue = ({ items, dropDownField,toggleDropdownStatus,setSelectedValue,toggleDropdownIconStatus, ...props }) => {
  const [item, setSelectedItem] = React.useState('');
  const [filteredData,setFilteredData]= React.useState(items);
  const [showManageForm, setManageForm] = React.useState(false);
  

  const handleListItemClick=(e,index)=>{
  
    
    setSelectedValue(index);
    toggleDropdownStatus();

  }

  const handleChange = (e) => {

    setSelectedItem(e.target.value);
    filteredList(e.target.value)

  }
  const filteredList=(data)=>{
    let currentList=[];
    let newList=[];
  
  
    if(data !==""){
  
        
        currentList=items;
       
       
        newList=currentList.filter(item=>{     
             
                return item.includes(data)
           
        })
        
  
    }else{
  
        newList=items
    }
  
    setFilteredData(newList)
  
   
   
  }

  const handeManage=()=>{
    
    setManageForm(!showManageForm);
    toggleDropdownIconStatus();

  }

  const handleCloseForm=()=>{
    toggleDropdownStatus();

  }

  const classes = useStyles();

  return (
    <Fragment>
    {showManageForm? <AddValueToDropDown items={items} dropDownField={dropDownField} handleCloseForm={handleCloseForm} toggleDropdownStatus={toggleDropdownStatus}/>:
    <div style={{ display: 'flex', flexDirection: 'column', width: '300px', marginTop: '5px',position:'absolute',zIndex:'10000',background:'white'}}>
      <List component="nav" aria-label="main mailbox folders" className={classes.list} >
        <input
          id={dropDownField}
          type='text'
          className={classes.input}
          value={item}
          onChange={(e)=>handleChange(e)}
        />
        {filteredData.map((item,index) => (
          <ListItem button className={classes.listItem} onClick={event => handleListItemClick(event, index)} key={item}>
            <ListItemText primary={item} className={classes.listText} />
            {/* <ListItemIcon className={classes.icon}>
              <DeleteOutlineIcon  />
            </ListItemIcon> */}
          </ListItem>
        ))}
        <Divider className={classes.hr}/>
        <ListItem button style={{ paddingTop: '0', paddingBottom: '0',position:'relative',zIndex:'10001' }} onClick={handeManage}>
          <ListItemIcon className={classes.settingsIcon} >
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={`Manage ${dropDownField}`} className={classes.settingsText}/>
        </ListItem>
      </List>
   
    </div>}
    </Fragment>
  )

}


export default function Dropdown({ items, dropDownField,marginValue, ...props }) {
  const classes = useStyles();
  const [data, setData] = React.useState('');
  const [dropDownStatus, setDropdownStatus] = React.useState(false);
  const [dropDownIconStatus, setDropdownIconStatus] = React.useState(false);
  // const [anchorEl, setAnchorEl] = React.useState(null);

  const node = useRef();

  const clearData=()=>{
    setData('')
  }
 
  const setSelectedValue=(index)=>{

    setData(items[index])
  }

  useOnClickOutside(node, (event) => {
    if(dropDownIconStatus && dropDownStatus)
    setDropdownStatus(false)});

  const toggleDropdownStatus = (event) => {
    // setAnchorEl(anchorEl ? null : event.currentTarget)
    setDropdownStatus(!dropDownStatus);
    toggleDropdownIconStatus(dropDownStatus);
    ;
  }
  const toggleDropdownIconStatus = () => {

    setDropdownIconStatus(!dropDownStatus);
  }


  
  // const open = Boolean(anchorEl);
  // const id = open ? 'simple-popover' : undefined;

  const expandIcon =
    (!dropDownStatus || !dropDownIconStatus) ? <ExpandMoreIcon  className={classes.expand} onClick={toggleDropdownStatus}/> : <ExpandLessIcon className={classes.expand} onClick={toggleDropdownStatus}/>
  
  let clearIcon
    
  clearIcon=!dropDownStatus && data!=='' ?<ClearIcon className={classes.expand} onClick={clearData}/>:null

  return (
     <div  ref={node} style={{width:'350px',margin:`${marginValue}`}} >
     <label className={classes.label}>Manufacturer</label>
     <div className={classes.divcontainer}>   
      <input
        type='text'
        value={data}
        placeholder={`Select or Add ${dropDownField}`}
        onClick={toggleDropdownStatus}
        className={classes.input2}
      /> 
      {clearIcon}
      {expandIcon}
      </div>   
      {/* <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
       
      > */}
      {dropDownStatus ? <ListValue items={items} dropDownField={dropDownField} toggleDropdownStatus={toggleDropdownStatus} setSelectedValue={setSelectedValue} toggleDropdownIconStatus={toggleDropdownIconStatus}/> : null}
      {/* </Popper> */}
    </div>
  )
}
