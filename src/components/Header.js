import React, { useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from "../features/car/carSlice";
import { useSelector } from 'react-redux';

const Header = () => {

  const cars = useSelector(selectCars)

  const [openBurger, setOpenBurger] = useState(false)

  return (
    <Container>
      <a href='blank_html'>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Nav>
        {cars && cars.map((car, index) => (
          <a key={index} href='blank_html'>{car}</a>
        ))}
      </Nav>
      <Menu>
        <a href='blank_html'>Shop</a>
        <a href='blank_html'>Account</a>
        <button onClick={() => setOpenBurger(true)}>Menu</button>
      </Menu>
      <BurgerNav show={openBurger}>
        <CloseWrapper onClick={() => setOpenBurger(false)} >
          <CustomClose />
        </CloseWrapper>
        {cars && cars.map((car, index) => (
          <li><a key={index} href='blank_html'>{car}</a></li>
        ))}
        <li><a href='blank_html'>Existing Invetory</a></li>
        <li><a href='blank_html'>Used Invetory</a></li>
        <li><a href='blank_html'>Test Drive</a></li>
        <li><a href='blank_html'>Cybertruck</a></li>
        <li><a href='blank_html'>Roadstar</a></li>
        <li><a href='blank_html'>Semi</a></li>
        <li><a href='blank_html'>Charging</a></li>
        <li><a href='blank_html'>Powerwall</a></li>
        <li><a href='blank_html'>Commercial Energy</a></li>
        <li><a href='blank_html'>Utilities</a></li>
        <li><a href='blank_html'>Find Us</a></li>
        <li><a href='blank_html'>Support</a></li>
        <li><a href='blank_html'>Investor Relation</a></li>
      </BurgerNav>
    </Container >
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  min-height: 60px;
  padding: 0 20px;
  width: 1440px;
  margin:0 auto;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index:999;
  `
const Nav = styled.div`
display: flex;
align-items: center;
flex-grow: 1;
justify-content: center;

a{
  font-weight: 500;
  padding: 4px 8px;
  font-size: 14px;
  line-height: 21px;
  cursor: pointer;
  border-radius: 12px;
  &:hover {
    background:rgb(92, 93, 97,0.3);
  }
}
@media only screen and (max-width:768px){
  display: none;
}
`
const Menu = styled.div`
 display: flex;
 align-items: center;
 a{
  font-weight: 500;
  padding: 4px 8px;
  font-size: 14px;
  line-height: 21px;
  cursor: pointer;
  border-radius: 12px;
  &:hover {
    background:rgb(92, 93, 97,0.3);
  }

 }
 button{
  font-weight: 500;
  padding: 4px 8px;
  font-size: 14px;
  line-height: 21px;
  cursor: pointer;
  border-radius: 12px;
  &:hover {
    background:rgb(92, 93, 97,0.3);
  }
  padding: 0 10px;
  cursor: pointer;
  border: none;
  background-color: transparent;
 }
`
const BurgerNav = styled.ul`
  list-style: none;
  position: fixed;
  bottom: 0;
  top: 0;
  right:0;
  width: 311px;
  padding: 60px 32px;
  background-color: #fff;
  height:100vh;
  text-align: left;
  overflow-y: scroll;
  transition: all 0.3s ease-in;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  opacity: ${props => props.show ? '1' : '0'};
  li{
    padding: 4px 8px;
    margin-bottom: 8px;
    transition:color 0.33s ease;
    &:hover{
      background-color: #f2f2f2;
      border-radius: 10px;
    }
  }
  a{
    cursor: pointer;
  }
`
const CustomClose = styled(CloseIcon)`

`
const CloseWrapper = styled(CloseIcon)`
  position: absolute;
  top: 24px;
  right: 32px;
  cursor: pointer;
`