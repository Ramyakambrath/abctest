import React, {useState,useRef,useEffect} from 'react'
import styled from 'styled-components'
import { Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faHome } from '@fortawesome/free-solid-svg-icons';
import Avatar from 'react-avatar';


const MyHomeNavbar= styled.nav`
   display: flex;
   height:48px;
   justify-content:space-between;
   align-items:center;
   background:#eceff1;
   color:rgba(0, 0, 0, 0.54);

   @media (min-width: 600px) {
    width: calc(100% - 180px);
    margin-left: 180px;
  }
 
   .logo{
       margin-left:15%;    
       font-size: 3vh;
       font-weight:bold;
       text-shadow: 3px 3px 3px white; 
       line-height:1.8;   

     
   }
   .nav-links{   
     display: flex;  
     list-style:none;
     
   }
  
   .link{
    padding:10px;
    margin-Right:10px;
  
   }
   .link:hover{
    background:#4d4a4a
   }
   .link:active {
    background-color: black;
    background-size: 100%;
    transition: background 0s;
  }
   

`
const Mydiv=styled.div`
 

  .menuItem:hover{
    background:#CCCCCC;
    cursor:pointer;


  }
  .menuItem:active {
    background-color: white;
    background-size: 100%;
    transition: background 0s;
  }

`
export default function Navbar({home,name,menu,subMenu,menuIcon,subMenuIcon,logo}) {

    const [open,setOpen]=useState(false)
    const node = useRef();
    const [showModal,setShowModal]=useState(false)
 

    const handleToggle=(e)=>{

        setOpen(!open)
    }

    const handleClickOutside=(e)=>{

      
      if (node.current && node.current.contains(e.target)) {
        return ;
      }
      setOpen(false)

    }
    const handleClick=(e,hasModal)=>{
      
      setOpen(false)
     
   
      if(hasModal){
         setShowModal(!showModal)

      }

    
    }
    const closeModalHandler = () => {
      setShowModal(false)
  }

    useEffect(() => {
      // add when mounted
      document.addEventListener("mousedown", handleClickOutside);
      // return function to be called when unmounted
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
    

    

    return (
        <fragment>

            <MyHomeNavbar>
                <div className='logo'>{logo}</div>
              <ul className='nav-links'>
                  <li><Link to='/' className='link'><FontAwesomeIcon icon={faHome} style={{ fontSize: '1em', marginRight: '.5rem', cursor: 'pointer' }}></FontAwesomeIcon>{home}</Link></li>
                  {menu.map(m=>
                  <li><Link to='/' className='link' onClick={(m.hasSubMenu && handleToggle) || null}><FontAwesomeIcon icon={m.icon} style={{ fontSize: '1em', marginRight: '.5rem', cursor: 'pointer' }}></FontAwesomeIcon>{m.title}</Link></li>
                  )}
                  <li><Link to='/' className='link'><Avatar name={name} size="30" round="20px" style={{ marginRight: '.2rem', cursor: 'pointer',color:'grey' }}/></Link></li>               
              </ul>
              
            </MyHomeNavbar>
            <Mydiv style={{display:'flex',justifyContent:'flex-end',flexWrap:'nowrap'}}>  
            {open?
              <ul ref={node} className='menuList' style={{width:'35vh',height:'14vh',  boxSizing:'content-box',boxShadow: '0px 5px 5px grey',backgroundColor: '#fff',marginRight:'40px',borderRadius:'5px',marginTop:'0'}}>
                  {subMenu.map(s=>
                  <li className='menuItem' style={{paddingLeft:'30px',paddingTop:'10px',paddingBottom:'10px'}} onClick={(e)=>handleClick(e,s.showModal)} ><FontAwesomeIcon icon={s.icon} style={{ fontSize: '1em', marginRight: '.5rem', cursor: 'pointer' }}></FontAwesomeIcon>{s.title}</li>
                  )}
              </ul>:null}
              {/* <Modal show={showModal} close={closeModalHandler} /> */}
            </Mydiv>
             
        </fragment>
    )
}
