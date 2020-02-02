import React from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';

const StyledBurger = styled.button`
  position: absolute;
  top: 2%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  outline:none;
  // pointer-events:${({ open }) => open ? 'none' : 'all'};
  span {
    width: ${({ open }) => open ? '1.5rem' : '2rem'};
    height: 0.25rem;
    background: ${({ theme, open }) => open ? theme.primaryDark : theme.primaryLight};
    border-radius: 10px;
    transition: all 0.1s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
      
      
    }
    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }
    :nth-child(3) {
     
      transform: ${({ open }) => open ? ' translateY(-6px) rotate(-45deg)':  'translate(0) rotate(0)'};
     
    }
  }

  @media (min-width: 600px) {
    display: none; 
  }
`;

const Burger = ({ open, setOpen, ...props }) => {
  
  const isExpanded = open ? true : false;
  
  return (
    <StyledBurger aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
      <span />
      <span />
      <span />
    </StyledBurger>
    
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;