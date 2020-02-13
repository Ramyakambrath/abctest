import React, {useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useOnClickOutside } from '../../../hooks';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {  Divider } from '@material-ui/core';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const useStyles = makeStyles(theme => ({
  listDiv:{
    display: 'flex', 
    border: '1px solid #999999', 
    flexDirection: 'column', 
    width: '300px'


  },
  list:{
    paddingTop: '0', 
    paddingBottom: '0'

  },

  input: {
    
    width:'300px',
    borderRight: '1px hidden',
    borderTop: '1px solid',
    borderBottom: '1px solid',
    borderLeft: '1px solid',
    color:'#999',
    backgroundColor: 'hsl(0,0%,100%)',
    bordercolor: 'hsl(0,0%,80%)',
   // borderRadius: '4px 0px 0px 4px',
   '&::placeholder': {
   
    color: '#999'
  }
    
  },
  expand:{
   color:'#999',
   borderRight: '1px solid',
    borderTop: '1px solid',
    borderBottom: '1px solid',
    borderLeft: '1px hidden',
    backgroundColor: 'hsl(0,0%,100%)',
    bordercolor: 'hsl(0,0%,80%)',
  //  borderRadius: '0px 4px 4px 0px',

  },
  listItem:{
    paddingTop: '0', 
    paddingBottom: '0' ,
    background: "white",
      '&:hover': {
        background: "#2196f3",
        "& .MuiTypography-body1":{
         
          color:'white',
      }
      }
   
  },
  iconList:{
  
    
      minWidth:'10px'
    

  },
  icon:{
    width:'16px',
    height:'16px',
    color: 'white'
  },
  listText:{
    "& .MuiTypography-body1":{
      fontSize:'.7em',
      color:'black',

    }
  }
 
}))

const ListValue = ({ items, getSelectedItem,...props }) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState('');
  const handleListItemClick=(e,index)=>{
  
    setSelectedIndex(index);
    getSelectedItem(index);

  }
  return (
    <fragment>
    {items.length>0?
    <div  className={classes.listDiv}>
    
      <List component="nav" aria-label="main mailbox folders" className={classes.list}>
        {items.map((item,index) => (
          <ListItem button className={classes.listItem} selected={selectedIndex === index} onClick={event => handleListItemClick(event, index)}>
            <ListItemText primary={item} className={classes.listText} />
            <ListItemIcon className={classes.iconList}>
              <DeleteOutlineIcon className={classes.icon}/>
            </ListItemIcon>
            <Divider />
          </ListItem>
        ))}
      </List>
    </div> :null}
    </fragment>
  )

}


export default function Dropdown({ items, ...props }) {
  const classes = useStyles();
  const [item, setSelectedItem] = React.useState('');
  const [filteredData,setFilteredData]= React.useState(items);
  const [dropDownStatus,setDropdownStatus]=React.useState(false);

  const node = useRef();


  useOnClickOutside(node, () => setDropdownStatus(false));

  const getSelectedItem=(index)=>{

    setSelectedItem(items[index]);
    setDropdownStatus(!dropDownStatus);
 

  }

  const handleInputClick=()=>{
    
    setDropdownStatus(!dropDownStatus);
    

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
let expandIcon

expandIcon =
    !dropDownStatus ?  <ExpandLessIcon className={classes.expand} onClick={handleInputClick}/>: <ExpandMoreIcon  className={classes.expand} onClick={handleInputClick}/>
      

  return (
    <div  ref={node} style={{width:'300px'}} >
      <div style={{display:'flex'}}>
        <input
        id='unit'
        className={classes.input}
        type='text'
        placeholder="Select or type to add"
        value={item}
        onChange={(e)=>handleChange(e)}
        onClick={handleInputClick}
        
      />
      {expandIcon}
      </div> 
     {dropDownStatus?<ListValue items={filteredData} getSelectedItem={getSelectedItem}/>:null}
    </div>
  )
}
