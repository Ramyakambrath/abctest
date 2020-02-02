import React, { useRef,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Divider } from '@material-ui/core';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import SettingsIcon from '@material-ui/icons/Settings';
import { useOnClickOutside } from '../../../hooks';
import ClearIcon from '@material-ui/icons/Clear';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ReactDOM from 'react-dom';

const useStyles = makeStyles(theme => ({

    container:{
        display: 'flex', 
        flexDirection: 'column', 
        width: '600px', 
        marginTop: '5px',
        zIndex:'5000',
        position:'fixed',
        background:'white',
        top: '0',
        left: '250px',
      //  transform:'translate(0%, -150%)',
    //    transition: 'transform .3s ease-out',
        transform: 'translateZ(150)',
      //  backgroundColor: 'rgba(0, 0, 0, 0.5)'
        
    },



    title: {
        margin: theme.spacing(1, 0, 1),
        marginLeft: '25px',
        color: '#616161'

    },


    icon: {

        width: '16px',
        height: '16px',
        "& .MuiSvgIcon-root": {
            color: 'white',
            // "&:hover":{
            //     color: '#428bca'
            // }
        }
    },

    listText: {

        color:"#212529",
        

        "& .MuiTypography-body1": {
            fontSize: '.8em',

        }
    },
    listDiv:{
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        width: '100%', 
        height: '65px', 
        background: '#f5f5f5',
        
    },
    listDiv2:{
        display: 'flex', 
        width: '100%', 
        justifyContent: 'flex-start', 
        margin: '15px 0 15px 35px',
       

    },
    listDiv3:{
        display: 'flex', 
        width: '100%', 
        justifyContent: 'flex-start',
        
    },
    list: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid #e0e0e0',
        boxShadow: '0px 5px 15px 5px #bdbdbd',
        paddingTop: '0px',
        paddingBottom: '0px',
        


    },
    listItem: {
        paddingTop: '0',
        paddingBottom: '0',
        background: "white",
       
        '&:hover': {
            background: '#f5f5f5',
           "& .MuiSvgIcon-root": {
            color: '#428bca',
            
        },
        "& span":{
            color: '#428bca',
        }
        }


    },
    hr: {
        alignSelf: 'stretch',
        width: 'auto',
    },
    button: {
        color: '#fff',
        backgroundColor: '#2fa3e6',
        borderColor: '#2fa3e6',
        textTransform: 'none'
    },
    selectButton:{
        color: '#fff',
        backgroundColor: '#2fa3e6',
        borderColor: '#2fa3e6',
        textTransform: 'none',
        marginTop:'20px',
        marginLeft:'25px',
        minWidth:'30px' ,
        
        "&.MuiButton-root":{
            lineHeight:'1'
        }
        

    },
    cancelButton:{
        color: '#616161',
        borderColor: '#2fa3e6',
        textTransform: 'none',
        marginTop:'20px',
        marginLeft:'25px',
        minWidth:'30px' ,
        
        "&.MuiButton-root":{
            lineHeight:'1'
        }
        

    },
    addnewDiv:{
        display: 'flex', 
        width: '500px', 
        height:'130px',
        flexDirection:'column',
        justifyContent: 'flex-start',
        background:'#f5f5f5'
    },
    spanItem:{
        color:'white',
        fontSize:'.7em',
        paddingTop:'5px',
        paddingLeft:'3px'
    },
  
    input:{
        width:'450px',
        height:'25px',
        marginLeft:'25px'
    }


}))

const NewForm=({handleCancel,dropDownField,...props})=>{
    const classes = useStyles();

    
    const handleChange=()=>{
        
    }
    return(

        <div  className={classes.addnewDiv}>
                        <Typography variant="caption" className={classes.title} style={{color: 'rgb(185, 74, 72)'}}>
                            {`${dropDownField} Name*`}
                        </Typography>
                        <input 
                          type='text'
                          value=''
                          onChange={handleChange}
                          className={classes.input}
                        />
                        <div>
                        <Button  variant="contained" color="primary" className={classes.selectButton}>Save and Select</Button>
                        <Button  variant="contained" color="default" className={classes.cancelButton} onClick={handleCancel}>Cancel</Button>
                        </div>
        </div>
    )
}


export default function Modal({items, dropDownField,handleClose,toggleDropdownStatus, toggleManageForm,...props}) {

    const classes = useStyles();
    const [showAddForm, setAddForm] = React.useState(false);
    

    const handleOpenManufacturer=(event)=>{
        event.stopPropagation();
        setAddForm(!showAddForm);

       
    }
    const handleCancel=()=>{
        setAddForm(!showAddForm)
    }

    const handleModalClose=()=>{
      
        handleClose()
    }
    
    // const refItem = useRef();

    // useOnClickOutside(refItem, (event) => {
    //     toggleManageForm()});

    return (
       
            <aside  tag="aside"
              role="dialog" className={classes.container}>
                <List component="nav" aria-label="main mailbox folders" className={classes.list} >
                    <div className={classes.listDiv}>
                        <Typography variant="h8" className={classes.title}>
                            {`Manage ${dropDownField}`}
                        </Typography>
                        <ClearIcon style={{ paddingRight: '10px',cursor:'pointer' }} onClick={handleModalClose}/>
                    </div>
    
                    <Divider className={classes.hr} />
                    <div className={classes.listDiv2}>
                       {!showAddForm? <Button variant="contained" color="primary" className={classes.button} onClick={handleOpenManufacturer}>
                            + New Manufacturer
                       </Button>:<NewForm handleCancel={handleCancel} dropDownField={dropDownField}/>
                        }
                    </div>
                    <Divider className={classes.hr} />
                    <div className={classes.listDiv3}>
                        <Typography variant='subtitle2' className={classes.title}>
                            {dropDownField}
                        </Typography>
                    </div>
                    <Divider className={classes.hr} />
                    {items.map((item, index) => (
                        <React.Fragment>
                            <ListItem button className={classes.listItem} key={item}>
                                <ListItemText primary={item} className={classes.listText} />
                                <ListItemIcon className={classes.icon}>
                                    <EditOutlinedIcon/>
                                    <span className={classes.spanItem}>Edit</span>
                                </ListItemIcon>
                                <ListItemIcon className={classes.icon}>
                                    <DeleteOutlineIcon />
                                    <span className={classes.spanItem}>Delete</span>
                                </ListItemIcon>
                            </ListItem>
                            <Divider className={classes.hr} />
                        </React.Fragment>
                    ))}
                </List>
            </aside>
    )
}
