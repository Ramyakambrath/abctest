import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import DropZone from '../../../Generic/DropZone/DropZone';
import InputAdornment from '@material-ui/core/InputAdornment';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { Tooltip } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Chip from '@material-ui/core/Chip';
import Dropdown from '../../../Generic/Dropdown/Dropdown';

const useStyles = makeStyles(theme => ({

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(3),
    ['@media (min-width: 600px)']: {
      width: 'calc(100% - 180px)',
      marginLeft: '180px'
    },
    
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between'

  },

  formControl: {
    margin: theme.spacing(3),
    height: '33px',
  },

  marginControl: {
    width: '100%',
    marginLeft: theme.spacing(2),
    display: 'flex',
    flexFlow: 'column nowrap',

  },

  inputField2: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
    paddingBottom: theme.spacing(2),
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    "& .MuiFormControl-fullWidth": {
      width: '34%'
    }

  },

  inputField3: {
    display: 'flex',
    flexFlow: 'column nowrap',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(10),
    width: 350,
   

  },
  inputField5: {
    width: '100%',
    paddingBottom: theme.spacing(2),
    display: 'flex',
    flexFlow: 'column nowrap',

  },
  inputField6: {
    display: 'flex',
    flexFlow: 'row nowrap',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(2),
    width: '100%',
    "& .MuiFormControl-fullWidth": {
      width: 350

    }

  },

  inputField4: {
    width: '100%',
    paddingBottom: theme.spacing(2),
    display: 'flex',
    flexFlow: 'row nowrap',



  },
  inputField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 350,
    paddingBottom: theme.spacing(2),


  },



  input: {
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      fontSize: '.7rem',
    },
    
  },
  
  autocomplete:{
    "& .MuiInputBase-root":{
      fontSize: '.7rem',
     
      },
      
    
  
    
  },
  listbox:{
    paddingTop: '0',
    paddingBottom: '0',

   
  },
  option:{
    fontSize: '.7rem',
    paddingTop:'0px',
    paddingBottom:'0px',
    color:'black',
    display:'flex',
    justifyContent:'space-between',
    minHeight:'1px',
    Height:'3px',
    

    background: "white",
      '&:hover': {
        background: "#2196f3",
        color:'white',
      },
   
    "& .MuiSvgIcon-root path":{
      background: 'white',

      fontSize:'.7em'
    },

    "& .MuiSvgIcon-root":{
      color:'white',
      fontSize:'.7em'
    },
    "& .MuiAutocomplete-option":{
      minHeight:'5px'
    }

   
    // "& 		.MuiAutocomplete-option":{
    //   fontSize: '.7rem',
    

    // }
  },
  label: {
    fontSize: '.8rem'
  },
  adornment: {
    "& .MuiInputAdornment-root": {

    },

    "& p": {
      background: '#fbfafa',
      fontSize: '.9rem',
      width: '25px',
      paddingLeft: '3px'
    }
  },
  
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5"
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)"
    }
  },
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
  },
  checkbox: {
    paddingLeft: '24px',
    '& svg': {
      width: '.7em',
      height: '.7em'
    }
  }

}));

// const theme = createMuiTheme({
//   overrides: {
//     MuiFormLabel: {
//       root: {
//         "&$focused": {
//           color: "red!important",
//           fontWeight: "bold"
//         }
//       }, 

//       focused: {}
//     }
//   }
// });

export default function NewItem() {
  const classes = useStyles();

  const units = [{title:'box'}, {title:'cm'}, {title:'dz'},{title:'ft'}, {title:'g'}, {title:'kg'},{title:'lb'}, {title:'mg'}, {title:'m'}]
  const manufacturer=['M1', 'M2', 'M3']

  const [value, setValue] = React.useState('female');
  const [unitData, setUnit] = React.useState(units);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const tooltipText = {
    ISBN: 'Thirteen digit unique commercial book identifier(International Standard Book Number)',
    SKU: 'The Stock Keeping Unit of the item',
    Unit: 'The item will be measured in terms of this unit',
    UPC: 'Twelve digit unique number associated with the bar code(Universal Product Code)',
    EAN: 'Thirteen digit unique number(Internation article number)',
    MPN: 'Manufacturing Part Number unambiguously identified a part design',
    Return: 'Enable this option if the item is eligible for sales return',
    'Track': 'Enable inventory to track this item stock based on the sales and purchase transaction'
  }

  const onDeleteClick=(event,option)=>{

    event.stopPropagation();

    let newUnitList=unitData.filter(item=>item.title!==option);
    console.log(newUnitList)
    setUnit(newUnitList);
    

  }
  
  //,'dz','ft','g','in','kg','km','lb','mg','m','pcs'

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div style={{ width: '100%' }}>
        <Paper className={classes.paper} style={{ background: '#fbfafa' }}>
          <div className={classes.marginControl}>
            <div >
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend" className={classes.label}>Type</FormLabel>
                <RadioGroup aria-label="type" name="type1" value={value} onChange={handleChange} row >
                  <FormControlLabel value="goods"
                    control={<Radio icon={<span className={classes.icon} />} />} label="Goods" classes={{ label: classes.label }} labelPlacement="end" />
                  <FormControlLabel value="service"
                    control={<Radio icon={<span className={classes.icon} />} />} label="Service" classes={{ label: classes.label }} labelPlacement="end" />
                </RadioGroup>
              </FormControl>
            </div>
            <div className={classes.inputField}>
              {/* <MuiThemeProvider theme={theme}> */}
              <TextField
                id="name"
                label="Name"
                style={{ margin: 15}}
                placeholder="Enter Item Name"
                fullWidth="false"
                margin="normal"
                InputProps={{
                  classes: {
                    input: classes.input
                  }
                }}
                InputLabelProps={{
                  shrink: true,

                }}


              />
              {/* </MuiThemeProvider> */}
              <TextField
                id="sku"
                label="SKU"
                style={{ margin: 15 }}
                placeholder="Enter SKU"
                fullWidth="false"
                margin="normal"
                InputProps={{
                  classes: {
                    input: classes.input
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <Tooltip title={tooltipText.SKU} arrow classes={classes} placement="right-start" >
                        <HelpOutlineIcon className={classes.icon} style={{ color: "grey" }} />
                      </Tooltip>
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  shrink: true,
                }}

              />
              <Autocomplete
                id="unit"
                options={unitData}
                getOptionLabel={option=> option.title}
                style={{ width: 300 }}
                classes={{option:classes.option,listbox:classes.listbox}}
                renderOption={option => {
                  return (
                    <React.Fragment  >
                      {option.title}
                      {/* <Chip
                        size="small"
                        icon={<DeleteIcon />}
                        onClick={handleClick}
                       /> */}
                      <IconButton edgeEnd aria-label="delete"  >
                        <DeleteIcon onClick={(e)=>onDeleteClick(e,option.title)} />
                      </IconButton>

                    </React.Fragment>
                  );
                }}
                renderInput={params => (
                  <TextField
                  {...params}
                    id="unit"
                    label="Unit"
                    style={{ margin: 15 }}
                    placeholder="Enter Unit"
                    fullWidth="false"
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    className={  classes.autocomplete }
                  /> 
                

                )}
              />

              <formControl style={{ display: 'flex' }} >


                <FormControlLabel
                  value="end"
                  control={<Checkbox checked={true} color="primary" className={classes.checkbox} />}
                  label="Returnable Item"
                  labelPlacement="end"
                  classes={{ label: classes.label }}
                />

                <InputAdornment position="end" style={{ height: '2em' }}>
                  <Tooltip title={tooltipText.Return} arrow classes={classes} placement="right-end" >
                    <HelpOutlineIcon className={classes.icon} style={{ color: "grey" }} />
                  </Tooltip>
                </InputAdornment>
              </formControl>


            </div>
          </div>

          <DropZone />
          {/* </div> */}
        </Paper>
        <Paper className={classes.paper} >
          <div className={classes.marginControl}  >
            <div className={classes.inputField4} >
              <div className={classes.inputField3} >
                {/* <MuiThemeProvider theme={theme}> */}
                <TextField
                  id="dimensions"
                  label="Dimensions (cm)e"
                  style={{ margin: 15 }}
                  placeholder="Length X Width X Height"
                  fullWidth="false"
                  margin="normal"
                  InputProps={{
                    classes: {
                      input: classes.input
                    }
                  }}
                  InputLabelProps={{
                    shrink: true,

                  }}


                />
              
                <Dropdown dropDownField='Manufacturer' items={manufacturer} marginValue='15px'/>
                {/* <TextField
                  id="manufacturer"
                  label="Manufacturer"
                  style={{ margin: 15 }}
                  placeholder="Enter Manufacturer"
                  fullWidth="false"
                  margin="normal"
                  InputProps={{
                    classes: {
                      input: classes.input
                    }
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}

                /> */}
                <TextField
                  id="upc"
                  label="UPC"
                  style={{ margin: 15 }}
                  placeholder="Enter UPC"
                  fullWidth="false"
                  margin="normal"
                  InputProps={{
                    classes: {
                      input: classes.input
                    },
                    startAdornment: (
                      <InputAdornment position="start">
                        <Tooltip title={tooltipText.UPC} arrow classes={classes} placement="right-start" >
                          <HelpOutlineIcon className={classes.icon} style={{ color: "grey" }} />
                        </Tooltip>
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}

                />
                <TextField
                  id="ean"
                  label="EAN"
                  style={{ margin: 15 }}
                  placeholder="Enter EAN"
                  fullWidth="false"
                  margin="normal"
                  InputProps={{
                    classes: {
                      input: classes.input
                    },
                    startAdornment: (
                      <InputAdornment position="start">
                        <Tooltip title={tooltipText.EAN} arrow classes={classes} placement="right-start" >
                          <HelpOutlineIcon className={classes.icon} style={{ color: "grey" }} />
                        </Tooltip>
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <div className={classes.inputField3}>
                <TextField
                  id="weight"
                  label="Weight (kg)"
                  style={{ margin: 15 }}
                  placeholder="Enter Weight (kg)"
                  fullWidth="false"
                  margin="normal"
                  InputProps={{
                    classes: {
                      input: classes.input
                    }
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}

                />
                <TextField
                  id="brand"
                  label="Brand"
                  style={{ margin: 15 }}
                  placeholder="Select or Add Brand"
                  fullWidth="false"
                  margin="normal"
                  InputProps={{
                    classes: {
                      input: classes.input
                    }
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}

                />
                <TextField
                  id="mpn"
                  label="MPN"
                  style={{ margin: 15 }}
                  placeholder="Enter MPN"
                  fullWidth="false"
                  margin="normal"
                  InputProps={{
                    classes: {
                      input: classes.input
                    },
                    startAdornment: (
                      <InputAdornment position="start">
                        <Tooltip title={tooltipText.MPN} arrow classes={classes} placement="right-start" >
                          <HelpOutlineIcon className={classes.icon} style={{ color: "grey" }} />
                        </Tooltip>
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}

                />
                <TextField
                  id="isbn"
                  label="ISBN"
                  style={{ margin: 15 }}
                  placeholder="Enter ISBN"
                  fullWidth="false"
                  margin="normal"
                  InputProps={{
                    classes: {
                      input: classes.input
                    },
                    startAdornment: (
                      <InputAdornment position="start">
                        <Tooltip title={tooltipText.ISBN} arrow classes={classes} placement="right-start" >
                          <HelpOutlineIcon className={classes.icon} style={{ color: "grey" }} />
                        </Tooltip>
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            </div>
          </div>
        </Paper>
        <Paper className={classes.paper} >
          <div className={classes.marginControl}  >
            <div className={classes.inputField4} >
              <div className={classes.inputField3} >
                <FormControlLabel
                  value="end"
                  control={<Checkbox checked={true} color="primary" className={classes.checkbox} />}
                  label="Sales Infromation"
                  labelPlacement="end"
                  classes={{ label: classes.label }}
                />
                <TextField
                  id="selling price"
                  label="Selling Price"
                  style={{ margin: 15 }}
                  fullWidth="false"
                  margin="normal"
                  InputProps={{
                    classes: {
                      input: classes.input,
                    },
                    startAdornment: <InputAdornment position="start" className={classes.adornment}>INR</InputAdornment>,
                  }}
                  InputLabelProps={{
                    shrink: true,

                  }}
                />
                {/* </MuiThemeProvider> */}

                <TextField
                  id="account"
                  label="Account"
                  style={{ margin: 15 }}
                  placeholder="Enter Account"
                  fullWidth="false"
                  margin="normal"
                  InputProps={{
                    classes: {
                      input: classes.input
                    }
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}

                />

                <TextField
                  id="description"
                  label="Description"
                  style={{ margin: 15 }}
                  placeholder="Enter description"
                  fullWidth="false"
                  margin="normal"
                  InputProps={{
                    classes: {
                      input: classes.input
                    }
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}

                />
              </div>
              <div className={classes.inputField3} >
                <FormControlLabel
                  value="end"
                  control={<Checkbox checked={true} color="primary" className={classes.checkbox} />}
                  label="Cost Infromation"
                  labelPlacement="end"
                  classes={{ label: classes.label }}
                />
                <TextField
                  id="cost price"
                  label="Cost Price"
                  style={{ margin: 15 }}
                  fullWidth="false"
                  margin="normal"
                  InputProps={{
                    classes: {
                      input: classes.input
                    },
                    startAdornment: <InputAdornment position="start" className={classes.adornment}>INR</InputAdornment>,
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}

                />
                <TextField
                  id="account"
                  label="Account"
                  style={{ margin: 15 }}
                  placeholder="Enter Account"
                  fullWidth="false"
                  margin="normal"
                  InputProps={{
                    classes: {
                      input: classes.input
                    }
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}

                />
                <TextField
                  id="description"
                  label="Description"
                  style={{ margin: 15 }}
                  placeholder="Enter description"
                  fullWidth="false"
                  margin="normal"
                  InputProps={{
                    classes: {
                      input: classes.input
                    }
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}

                />
              </div>
            </div>
          </div>
        </Paper>
        <Paper className={classes.paper} >
          <div className={classes.marginControl}  >
            <div className={classes.inputField5} >
              <formControl style={{ display: 'flex' }} >
                <FormControlLabel
                  value="end"
                  control={<Checkbox checked={true} color="primary" className={classes.checkbox} />}
                  label="Track Inventory for this Item"
                  labelPlacement="end"
                  classes={{ label: classes.label }}
                />
                <InputAdornment position="end" style={{ height: '2em' }}>
                  <Tooltip title={tooltipText.Track} arrow classes={classes} placement="right-end" >
                    <HelpOutlineIcon className={classes.icon} style={{ color: "grey" }} />
                  </Tooltip>
                </InputAdornment>
              </formControl>
              <FormHelperText style={{ paddingLeft: '40px', paddingBottom: '20px' }}>You cannot enable/disable inventory tracking once you've created transactions for this item</FormHelperText>

              <div className={classes.inputField6} >
                {/* <MuiThemeProvider theme={theme}> */}
                <TextField
                  id="inventoryAccount"
                  label="Inventory Account"
                  style={{ margin: 15 }}
                  placeholder="Enter Inventory Account details"
                  fullWidth="false"
                  margin="normal"
                  InputProps={{
                    classes: {
                      input: classes.input,
                    }
                  }}
                  InputLabelProps={{
                    shrink: true,

                  }}
                />
              </div>
              <div className={classes.inputField6} >
                <div >
                  <TextField
                    id="openingStock"
                    label="Opening Stock"
                    style={{ margin: 15 }}
                    placeholder="Enter opening Stock"
                    fullWidth="false"
                    margin="normal"
                    InputProps={{
                      classes: {
                        input: classes.input
                      }
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}

                  />
                </div>
                <div style={{ paddingLeft: '60px' }}>
                  <TextField
                    id="rate"
                    label="Opening Stock Rate per Unit"
                    style={{ margin: 15 }}
                    placeholder="Enter Opening Stock Rate per Unit"
                    fullWidth="false"
                    margin="normal"
                    InputProps={{
                      classes: {
                        input: classes.input
                      }
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}

                  />
                </div>
              </div>
              <div className={classes.inputField6} >
                <div>
                  <TextField
                    id="reorderPoint"
                    label="Reorder Point"
                    placeholder="Enter Reorder Point"
                    style={{ margin: 15 }}
                    fullWidth="false"
                    margin="normal"
                    InputProps={{
                      classes: {
                        input: classes.input
                      }
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}

                  />
                </div>
                <div style={{ paddingLeft: '60px' }}>
                  <TextField
                    id="vendor"
                    label="Preferred Vendor"
                    style={{ margin: 15 }}
                    placeholder="Enter vendor"
                    fullWidth="false"
                    margin="normal"
                    InputProps={{
                      classes: {
                        input: classes.input
                      }
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}

                  />
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </div>

    </form>
  );
}