import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Divider } from '@material-ui/core';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ClearIcon from '@material-ui/icons/Clear';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ItemContext from '../../Context/ItemContext'
import DropdownContext from '../../Context/DropdownContext'

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useDispatch, useSelector } from "react-redux";
import { addManufacturer, updateManufacturer, deleteManufacturer } from '../../../Actions/manufacturerActions'
import { addBrand, updateBrand, deleteBrand } from '../../../Actions/brandActions'


const useStyles = makeStyles(theme => ({

    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '600px',
        marginTop: '5px',
        zIndex: '5000',
        position: 'fixed',
        background: 'white',
        top: '0',
        left: '400px',
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

        color: "#212529",


        "& .MuiTypography-body1": {
            fontSize: '.8em',

        }
    },
    listDiv: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '65px',
        background: '#f5f5f5',

    },
    listDiv2: {
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-start',
        margin: '15px 0 15px 35px',


    },
    listDiv3: {
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
            "& span": {
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
    selectButton: {
        color: '#fff',
        backgroundColor: '#2fa3e6',
        borderColor: '#2fa3e6',
        textTransform: 'none',
        marginTop: '20px',
        marginLeft: '25px',
        minWidth: '30px',

        "&.MuiButton-root": {
            lineHeight: '1'
        }


    },
    cancelButton: {
        color: '#616161',
        borderColor: '#2fa3e6',
        textTransform: 'none',
        marginTop: '20px',
        marginLeft: '25px',
        minWidth: '30px',

        "&.MuiButton-root": {
            lineHeight: '1'
        }


    },
    addnewDiv: {
        display: 'flex',
        width: '500px',
        height: '130px',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        background: '#f5f5f5'
    },
    spanItem: {
        color: 'white',
        fontSize: '.7em',
        paddingTop: '5px',
        paddingLeft: '3px'
    },

    input: {
        width: '450px',
        height: '25px',
        marginLeft: '25px'
    }


}))

const NewForm = ({ itemsdb,handleAddCancel, dropDownField, ...props }) => {
    const classes = useStyles();
    const [newItem, setnewItem] = React.useState({ name: '' });
    const data = React.useContext(ItemContext)
    const drop = React.useContext(DropdownContext)
    const [updatedItems, setUpdatedItems] = React.useState([]);
    const dispatch = useDispatch();
   // const manufacturer = useSelector(state => state.manufacturer.manufacturerList);


    React.useEffect(() => {

        if (updatedItems.length > 0)

            drop.handleListItemClick(itemsdb.map(item=>item.name).indexOf(newItem.name));


        return () => {

            handleAddCancel();
        }
    }, [itemsdb])


    const handleChange = (event) => {

        setnewItem({ name: event.target.value })

    }
    const handleOnSave = (event) => {

       switch (dropDownField) {
           case 'Manufacturer':
                dispatch(addManufacturer(newItem));
               break;
            case 'Brand':
                dispatch(addBrand(newItem));
               break;
           default:
               break;
       }
       

        // data.setManufacturer([...data.inputdata,newItem]);
        setUpdatedItems(itemsdb.map(item=>item.name));
        //   setUpdatedItems(manufacturer);
        data.setSnackbarOpen(!data.SnackbarOpen)
        data.setAlertMessage(`${dropDownField} added`)

    }
    return (
        <div className={classes.addnewDiv}>
            <Typography variant="caption" className={classes.title} style={{ color: 'rgb(185, 74, 72)' }}>
                {`${dropDownField} Name*`}
            </Typography>
            <input
                type='text'
                value={newItem.name}
                onChange={handleChange}
                className={classes.input}
            />
            <div>
                <Button variant="contained" color="primary" className={classes.selectButton} onClick={handleOnSave}>Save and Select</Button>
                <Button variant="contained" color="default" className={classes.cancelButton} onClick={handleAddCancel}>Cancel</Button>
            </div>
        </div>
    )
}

const EditForm = ({ items, itemsdb, handleEditCancel, dropDownField, editIndex,editId, ...props }) => {
    const classes = useStyles();
    const [editItem, seteditItem] = React.useState(items[editIndex]);
    const data = React.useContext(ItemContext);
    const drop = React.useContext(DropdownContext);
    const [updatedItems, setUpdatedItems] = React.useState([]);
    const dispatch = useDispatch();
   //    const manufacturerDB = useSelector(state => state.manufacturer.manufacturerListdb);


    
    React.useEffect(() => {
        
        
        if (updatedItems.length > 0)
            drop.handleListItemClick(editIndex);


        return () => {

            handleEditCancel();
        }   
    }, itemsdb)

    const handleChange = (event) => {

        seteditItem(event.target.value)

    }
    const handleOnSave = (event) => {

        switch (dropDownField) {
            case 'Manufacturer':
                dispatch(updateManufacturer({name:editItem},editId));
                break;
             case 'Brand':
                dispatch(updateBrand({name:editItem},editId));
                break;
            default:
                break;
        }
        

        
        setUpdatedItems(itemsdb.map(item=>item.name));
        data.setSnackbarOpen(!data.SnackbarOpen)
        data.setAlertMessage(`${dropDownField} added`)


        // const manufacturerDataArray = [...data.inputdata]
        // manufacturerDataArray[editIndex] = editItem
        // data.setManufacturer(manufacturerDataArray)
       

        // setUpdatedItems(data.inputdata);

   

    }
    return (
        <div className={classes.addnewDiv}>
            <Typography variant="caption" className={classes.title} style={{ color: 'rgb(185, 74, 72)' }}>
                {`Edit ${dropDownField} Name*`}
            </Typography>
            <input
                type='text'
                value={editItem}
                onChange={handleChange}
                className={classes.input}
            />
            <div>
                <Button variant="contained" color="primary" className={classes.selectButton} onClick={handleOnSave}>Save and Select</Button>
                <Button variant="contained" color="default" className={classes.cancelButton} onClick={handleEditCancel}>Cancel</Button>
            </div>
        </div>
    )
}

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export default function Modal({ items,itemsdb, dropDownField, handleClose, toggleManageForm, ...props }) {

    const classes = useStyles();
    const [showAddForm, setAddForm] = React.useState(false);
    const [showEditForm, setEditForm] = React.useState(false);
    const [editIndex, setEditIndex] = React.useState('');
    const [editId, setEditId] = React.useState('');
    const [SnackbarModalOpen, setSnackbarModalOpen] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState('');
    const data = React.useContext(ItemContext);
    const dispatch = useDispatch();
   // const manufacturerDB = useSelector(state => state.manufacturer.manufacturerListdb);
 

   


    const handleOpenManufacturer = (event, index) => {
        event.stopPropagation();
        setAddForm(!showAddForm);



    }
    const handleAddCancel = () => {
        setAddForm(!showAddForm)

    }

    const handleEditCancel = () => {
        setEditForm(!showEditForm)
        setEditIndex('')
        setEditId('')
    }

    const handleModalClose = () => {

        handleClose();
    }



    const handleEditItem = (event, index,id) => {
        
        event.stopPropagation();
        setEditForm(!showEditForm)
        setEditIndex(index)
        setEditId(id)
    }

    const handleDeleteItem = (event, index,id) => {

        switch (dropDownField) {
            case 'Manufacturer':
                dispatch(deleteManufacturer(id))
                break;
             case 'Brand':
                dispatch(deleteBrand(id))
                break;
            default:
                break;
        }
      //  let filteredItems = data.inputdata.filter(item => item !== data.inputdata[index]);
       
      //  data.setManufacturer(filteredItems);
        setSnackbarModalOpen(!SnackbarModalOpen)
        setAlertMessage(`${dropDownField} deleted`)

    }

    const handleSnackbarModalClose = (event, reason) => {

        if (reason === 'clickaway') {
            return;
        }
        setSnackbarModalOpen(!SnackbarModalOpen)

    }

    return (
      

        <aside tag="aside"
            role="dialog" className={classes.container}>
            <List component="nav" aria-label="main mailbox folders" className={classes.list} >
                <div className={classes.listDiv}>
                    <Typography variant="h8" className={classes.title}>
                        {`Manage ${dropDownField}`}
                    </Typography>
                    <ClearIcon style={{ paddingRight: '10px', cursor: 'pointer' }} onClick={handleModalClose} />
                </div>

                <Divider className={classes.hr} />
                <div className={classes.listDiv2}>
                    {!showAddForm && !showEditForm ? <Button variant="contained" color="primary" className={classes.button} onClick={handleOpenManufacturer} >
                        {`+ New ${dropDownField}`}
                    </Button> : showAddForm ? <NewForm handleAddCancel={handleAddCancel} dropDownField={dropDownField} itemsdb={itemsdb} /> : <EditForm items={items} itemsdb={itemsdb} handleEditCancel={handleEditCancel} dropDownField={dropDownField} editIndex={editIndex} editId={editId}  />
                    }
                </div>
                <Divider className={classes.hr} />
                <div className={classes.listDiv3}>
                    <Typography variant='subtitle2' className={classes.title}>
                        {dropDownField}
                    </Typography>
                </div>
                <Divider className={classes.hr} />
                {itemsdb.map((item, index) => (
                    <React.Fragment>
                        <ListItem button className={classes.listItem} key={item._id} >
                            <ListItemText primary={item.name} className={classes.listText} />
                            <ListItemIcon className={classes.icon}>
                                <EditOutlinedIcon onClick={event => handleEditItem(event, index,item._id)} />
                                <span className={classes.spanItem} onClick={event => handleEditItem(event, index,item._id)}>Edit</span>
                            </ListItemIcon>
                            <ListItemIcon className={classes.icon}>
                                <DeleteOutlineIcon onClick={event => handleDeleteItem(event, index,item._id)} />
                                <span className={classes.spanItem} onClick={event => handleDeleteItem(event, index,item._id)}>Delete</span>
                            </ListItemIcon>
                        </ListItem>
                        <Divider className={classes.hr} />
                    </React.Fragment>
                ))}
            </List>
            <Snackbar open={SnackbarModalOpen} autoHideDuration={3000} onClose={handleSnackbarModalClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} key={'top', 'right'}>
                <Alert onClose={handleSnackbarModalClose} severity="success">
                    {`${alertMessage} successfully`}
                </Alert>
            </Snackbar>
        </aside>

    )
}
