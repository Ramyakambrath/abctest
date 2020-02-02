import React, { useRef,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Divider } from '@material-ui/core';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import SettingsIcon from '@material-ui/icons/Settings';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { useOnClickOutside } from '../../../hooks';
import ClearIcon from '@material-ui/icons/Clear';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ReactDOM from 'react-dom';
import Modal from './Modal'

const useStyles = makeStyles(theme => ({

    container:{
        display: 'flex', 
        flexDirection: 'column', 
        width: '600px', 
        marginTop: '5px',
        zIndex:'5000',
        position:'absolute',
        background:'white',
        transform:'translate(0%, -150%)',
        transition: 'transform .3s ease-out',
        
        
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
    expand: {
        color: '#999',
        cursor: 'pointer',
        borderRight: '0px hidden',
        borderTop: '0px hidden',
        borderBottom: '2px solid',
        borderLeft: '0px hidden',
        backgroundColor: 'hsl(0,0%,100%)',
        bordercolor: 'hsl(0,0%,80%)',
        //  borderRadius: '0px 4px 4px 0px',

    },
    input:{
        width:'450px',
        height:'25px',
        marginLeft:'25px'
    }


}))


const ListValue = ({ items, dropDownField,handleCloseForm, ...props }) => {
    const [openManageForm, setOpenManageForm] = React.useState(false); 

  //  const reference = useRef();


 //   useOnClickOutside(reference, () => toggleDropdownStatus());
 const handleClose=()=>{

    setOpenManageForm(!openManageForm);
    handleCloseForm()

}
// const toggleManageForm=()=>{
//     setOpenManageForm(true)
// }
useEffect(()=>{ 
    if(!openManageForm){
    document.body.style.overflow = 'hidden';
   
   document.getElementById('root').style.opacity='0.5'
   
//   const scrollY = document.body.style.top;
//   document.body.style.position = '';
//   document.body.style.top = '';
//   window.scrollTo(0, parseInt(scrollY || '0') * -1);
    
 //   reference.current.scrollTop=;
   //   reference.current.scrollTo(0,0)
    }
    return()=>{
        document.body.style.overflow = 'unset';
        document.getElementById('root').style.opacity='unset'
    }
},[openManageForm])

    const classes = useStyles();

    
    return (
        <React.Fragment >
         {!openManageForm?ReactDOM.createPortal(<Modal items={items} dropDownField={dropDownField} handleClose={handleClose} />,document.body):<React.Fragment/>}
        </React.Fragment>
    )

}


export default function AddValueToDropDown({ items, dropDownField, handleCloseForm,...props }) {
    const classes = useStyles();
    const [data, setData] = React.useState('');
    const [dropDownStatus, setDropdownStatus] = React.useState(false);

  //  const node = useRef();


    // useOnClickOutside(node, () => setDropdownStatus(false));

    // const toggleDropdownStatus = () => {

    //     setDropdownStatus(false);
    // }
   


    return (
        <div   style={{ width: '500px'}} >
            <div style={{ display: 'flex' }}>
             <ListValue items={items} dropDownField={dropDownField} handleCloseForm={handleCloseForm} />
            </div>

        </div>
    )
}
