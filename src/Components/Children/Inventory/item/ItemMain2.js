import React, { Fragment } from 'react'
import SimpleTable from '../../../Generic/Table/SimpleTable'
import { headCells } from './ItemHeaderList'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


export default function ItemMain(props) {
    const rows = [{ name: 'aest', sku: 'false', stock: 'true', reorderLevel: 'testcccc', accountName: 'true', brand: 'Items', description: 'sss', manufacturer: 'manss', purchaseAccountName: 'sdsd', purchaseDescription: 'dd', purchaseRate: 'SSS', rate: 'DD', type: 'dsd' },
    { name: 'best', sku: 'false', stock: 'true', reorderLevel: 'testcccc', accountName: 'true', brand: 'Items', description: 'sss', manufacturer: 'manss', purchaseAccountName: 'sdsd', purchaseDescription: 'dd', purchaseRate: 'SSS', rate: 'DD', type: 'dsd' },
    ]
    const pageTitle = 'Items';
    

    const onAddNew=()=>{

        props.history.push('/Items/NewItem')
        

    }

   
    return (
        
        <Fragment>
            <div style={{display:'flex',justifyContent:'flex-end',width:'100%',padding:'10px 0 10px 0'}}>
            <Button variant="contained" style={{ backgroundColor: "#2fa3e6", color: 'white', lineHeight: '1.2', fontSize: '10px', width: '30px',height:'25px',marginRight:'250px',padding:'0'}} onClick={onAddNew}>
               <AddIcon fontSize='small'/> &nbsp;New
            </Button>
            </div>
            <SimpleTable headCells={headCells} rows={rows} pageTitle={pageTitle} />
            </Fragment>
        
    )
}
