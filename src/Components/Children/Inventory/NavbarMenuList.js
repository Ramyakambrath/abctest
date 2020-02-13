import React from 'react'
import { faPlus, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import Nav from '../../Generic/Navbar/Nav';



export default function NavbarMenuList() {
    const name='A D';
    const menuList=[{title:'New WebSite',icon:faPlus,hasSubMenu:true}]
    const submenuList=[{title:'Create New Website', showModal:false, icon:faPlus},{title:'Create New Group',showModal:true ,icon:faLayerGroup}]
    // const menuiconList=[faPlus]
    // const subMenuiconList=[faPlus,faLayerGroup]
    const logo='DeepThink'
 

    return (
          <Nav home={'Home'} name={name} menu={menuList} subMenu={submenuList}  logo={logo}/>         
    )
}
