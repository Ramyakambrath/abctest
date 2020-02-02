import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Sidebar from './Components/Generic/Sidebar/Sidebar'
import { items } from './Components/Children/Inventory/SidebarMenuList'
import { theme } from './theme'
import FocusLock from 'react-focus-lock';
import { useOnClickOutside } from './hooks';
import Burger from './Components/Generic/Burger/Burger'
import NavbarMenuList from './Components/Children/Inventory/NavbarMenuList'
import Content from './Components/Children/Inventory/Content'
import styled from 'styled-components'
import ItemMain from './Components/Children/Inventory/item/ItemMain';
import CustomizeColumns from './Components/Generic/CustomizeColumns/CustomizeColumns';
import ItemMain2 from './Components/Children/Inventory/item/ItemMain2';
import NewItem from './Components/Children/Inventory/item/NewItems';



function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  const DivContainer = styled.div`

position:relative;
min-height:100%;

  `

  return (
    <ThemeProvider theme={theme}>
      <>
      <BrowserRouter>
      <Switch>
        <DivContainer ref={node} className='container'>
          <FocusLock disabled={!open}>
            <NavbarMenuList/>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Sidebar open={open} setOpen={setOpen} id={menuId} items={items} />
            <Route exact path='/' component={Content}></Route> 
            <Route path='/Items/Items' component={ItemMain2}></Route> 
            <Route path='/Items/NewItem' component={NewItem}></Route> 
            <Route path='/Settings/CustomizeColumns' component={CustomizeColumns}></Route> 
          </FocusLock>
        </DivContainer>
      
        </Switch>

</BrowserRouter>


      </>
    </ThemeProvider>

  );
}

export default App;
