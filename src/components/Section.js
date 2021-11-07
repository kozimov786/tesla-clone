import React from 'react';
import styled from 'styled-components';
import Fade from "react-reveal/Fade"

const Section = ({ backgroundImg, title, description, leftBtnText, rightBtnText }) => {


  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h2>{title}</h2>
          <p>{description}</p>
        </ItemText>
      </Fade>

      <div>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>
              {leftBtnText}
            </LeftButton>
            {rightBtnText &&
              <RightButton>
                {rightBtnText}
              </RightButton>
            }
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </div>
    </Wrap>
  );
};


export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image:url("/images/model-s.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${props => `url("/images/${props.bgImage}")`};
`
const ItemText = styled.div`
  z-index: -1;
  margin-top: 15vh;
  text-align: center;
`
const ButtonGroup = styled.div`
 display: flex;
 margin-bottom: 40px;
 @media only screen and (max-width:768px){
   flex-direction: column;
 }
`
const LeftButton = styled.div`
  background-color: rgba(23,26,32,0.8);
  padding: 10px;
  width: 256px;
  border-radius: 100px;
  color: #fff;
  text-align: center;
  font-size: 12px;
  text-transform: uppercase;
  opacity: 0.85;
  cursor: pointer;
  margin: 8px;
`
const RightButton = styled(LeftButton)`
   background-color: #fff;
   opacity: 0.65;
   color: black;
`
const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s linear;
  overflow-x: hidden;
`