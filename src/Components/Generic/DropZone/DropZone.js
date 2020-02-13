import React,{useState} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    dropzoneParagraph:{
        fontSize:'15px'
        
      },
      dropzone:{
        width:'200px',
        marginRight:theme.spacing(30),
        marginTop:theme.spacing(8),
        minHeight:'200px',
        height:'200px'
        
      },
      container:{
        fontSize:'.7rem',
        zIndex:'2001',
          '& img': {
              width: '40px',
              height: '40px'
          },
          '& button': {
              left:'40px',
              top:'-5px',
            '& svg' :{
                width: '.8rem',
                height:'.8rem'
               },
              
          },
        '& .MuiGrid-grid-xs-4 ':{
            maxWidth:'20%',
            marginLeft: '-20px',
            marginRight: '-20px'
        },
        '& .MuiGrid-spacing-xs-8':{
            marginLeft: '0px'
        }
        
      }
}))

export default function DropZone() {
    const classes = useStyles();
    const [files,setFiles]=useState([])

   const handleChange=(files)=>{
    setFiles(files)
    
      }
    return (
        <div className={classes.container}>
        <DropzoneArea 
        onChange={handleChange} dropzoneParagraphClass={classes.dropzoneParagraph}
        dropzoneClass={classes.dropzone}
        showPreviews={true}
        showPreviewsInDropzone={false}
        />
        </div>
    )
}
