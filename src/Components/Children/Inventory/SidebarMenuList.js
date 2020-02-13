import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import NoteOutlinedIcon from '@material-ui/icons/NoteOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import AssignmentReturnOutlinedIcon from '@material-ui/icons/AssignmentReturnOutlined';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SettingsIcon from '@material-ui/icons/Settings';
import ViewColumnOutlinedIcon from '@material-ui/icons/ViewColumnOutlined';



function onClick(e, item) {
 

  

}


export const items = [
    { name: 'dashboard', label: 'Dashboard', icon:DashboardIcon, subMenu:false },
    "divider",
    { name: 'items', label: 'Items' , icon:ShoppingBasketIcon, subMenu:false,
    items: [
        { name: 'item groups', label: 'Item Groups', icon:AddIcon, onClick, parent:'Items',subMenu:true },
        "divider",
        { name: 'items', label: 'Items',  icon:ListIcon,onClick, parent:'Items', subMenu:true },
        "divider",
        { name: 'inventory adjustments', label: 'Inventory Adjustments', icon:EqualizerIcon, onClick, parent:'Items', subMenu:true }
      ],
    },
      "divider",
    { name: 'customers', label: 'Customers' , icon:PersonOutlineIcon, subMenu:false },
    "divider",
    { name: 'sales Order', label: 'Sales Orders' , icon:AddShoppingCartIcon, subMenu:false},
    "divider",
    { name: 'packages', label: 'Packages' , icon:PersonOutlineIcon, subMenu:false },
    "divider",
    { name: 'delivery note', label: 'Delivery Note' , icon:LocalShippingOutlinedIcon, subMenu:false},
    "divider",
    { name: 'invoices', label: 'Invoices' , icon:NoteOutlinedIcon, subMenu:false},
    "divider",
    { name: 'payments received ', label: 'Payments Received' , icon:MonetizationOnOutlinedIcon, subMenu:false},
    "divider",
    { name: 'returns ', label: 'Returns' , icon:AssignmentReturnOutlinedIcon, subMenu:false},
    "divider",
    { name: 'settings', label: 'Settings' , icon:SettingsIcon, subMenu:false,
    items: [
        { name: 'customize columns', label: 'Customize Columns', icon:ViewColumnOutlinedIcon, onClick,  parent:'Settings',subMenu:true },
      ],
    },
      "divider"
  ]