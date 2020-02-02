import React from 'react';
import styled from 'styled-components'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { blueGrey } from '@material-ui/core/colors';
import Divider from "@material-ui/core/Divider";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Collapse from "@material-ui/core/Collapse";
import { NavLink } from 'react-router-dom';


const MyDiv = styled.div`
display:block;
top:0;
width: 180px;
max-width: 340px;
min-height: 100%;
height:100vh;
background: #263238 ;
border: 1px solid #E5DBD1;
position: absolute;
color:white;
text-align:center;
transition: all 0.1s linear;
z-index:2000;

@media (max-width: 600px) {
    background:${({ open }) => open ? '#263238' : 'white'};
    border: ${({ open }) => open ? '1px solid #E5DBD1' : 'none'};
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
 }



.header{
    display:flex;
    justify-content:flex-end;
    color: rgba(0, 0, 0, 0.54);
    margin-bottom: 4px;
    background:#eceff1;
    font-size: 1.25rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0.0075em;
    
    @media (min-width: 600px) {
        justify-content:flex-start;
    }
 
   
  `
const Div = styled.div`

  .sidebar-item:hover{
    background:#01579b;
    cursor:pointer;
    text-align:left;

  }
  .MuiTypography-body2{
      font-size:0.75rem;
      font-family:Proxima Nova,"Source Sans Pro",Helvetica,Arial,sans-serif;
      
  }
  .MuiSvgIcon-root{
    font-size:1rem;
  }
  .icon{
    min-width: 25px
  }

`
function SidebarItem({ depthStep = 10, depth = 0, expanded, item,open,  ...rest }) {
    const [collapsed, setCollapsed] = React.useState(true);
    const { label,parent, items, onClick: onClickProp } = item;

    function toggleCollapse() {
        setCollapsed(prevValue => !prevValue);
    }

    function onClick(e) {
        if (Array.isArray(items)) {
            toggleCollapse();
        }
        if (onClickProp) {
            onClickProp(e, item);
          
        }


    }

    let expandIcon;

    if (Array.isArray(items) && items.length) {
        expandIcon = !collapsed ? (
            <ExpandLessIcon
            //    className={
            //        "sidebar-item-expand-arrow" + " sidebar-item-expand-arrow-expanded"
             //   }
            />
        ) : (
                <ExpandMoreIcon className="sidebar-item-expand-arrow" />
            );
    }
    console.log(Array.isArray(items) && item.subMenu === false? `/`:`/${parent}/${label}`,items,item,parent,label)

    return (   
        <>
        {/* {open?   */}
            <Div>            
                <ListItem className={`${"sidebar-item"} ${(Array.isArray(items) || item.subMenu === false ? null : "sidebar-item-content")}`} onClick={onClick}
                    button
                    dense
                    component={NavLink} to={Array.isArray(items) || item.subMenu === false? `/${label}`:`/${parent}/${label}`}
                    {...rest}>
                    <ListItemIcon className='icon'>
                        {Array.isArray(items) || item.subMenu === false ?
                            <item.icon style={{ color: blueGrey[500] }} />
                            :
                            <item.icon style={{ color: blueGrey[500], paddingLeft: depth * depthStep }} />
                        }
                    </ListItemIcon>
                    <ListItemText className='label'>{label}</ListItemText>
                    {expandIcon}      
                </ListItem>
               
            </Div> 
          {/* :null} */}
            <Collapse in={!collapsed} timeout="auto" unmountOnExit>
                {Array.isArray(items) ? (
                    <List disablePadding dense>
                        {items.map((subItem, index) => (
                            <React.Fragment key={`${subItem.name}${index}`}>
                                {subItem === "divider" ? (
                                   // open ?  
                                    <Divider style={{ margin:"1px 0"  }} />
                                  //  :null
                                ) : (
                                        <SidebarItem
                                            depth={depth + 1}
                                            depthStep={depthStep}
                                            item={subItem}
                                            open={open}
                                        />
                                    )}
                            </React.Fragment>
                        ))}
                    </List>
                ) : null}
            </Collapse>
            
            
            
        </>
    );
}

export default function Sidebar({ items, depthStep, depth, expanded ,open, ...props}) {

    // const isHidden = open ? true : false;
    
    return (
        <MyDiv open={open}>
            {/* {open? */}
            <ListItem className="header">           
                    <span style={{color: 'blue' ,fontSize:'1rem'}}>D</span>
                    <span style={{color: 'red' ,fontSize:'1rem'}}>T</span>
                    <span style={{color: 'yellow',fontSize:'1rem'}}>h</span>
                    <span style={{color: 'green',fontSize:'1rem'}}>i</span>
                    <span style={{color: 'red',fontSize:'1rem'}}>n</span>
                    <span style={{color: 'orange',fontSize:'1rem'}}>k</span>  
                    &nbsp;
                    <span>Inventory</span>  
             
            </ListItem>
            {/* :null} */}
            <List disablePadding dense>
                {items.map((subItem, index) =>
                    <div className='menuItem'>
                        <React.Fragment key={`${subItem.name}${index}`}>
                            {subItem === "divider" ? (
                            //   open ? 
                               <Divider style={{ margin: "1px 0" }} light />
                            //   :null
                            ) :
                                <SidebarItem
                                    depthStep={depthStep}
                                    depth={depth}
                                    expanded={expanded}
                                    item={subItem}
                                    open={open} {...props}
                                />
                            }
                        </React.Fragment>
                    </div>
                )}
            </List>
        </MyDiv>
    )
}
