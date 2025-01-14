import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Nav>
        <Logo>
            <img src='/images/logo.svg' alt=''/>
        </Logo>
    </Nav>
  )
}

const Nav = styled.nav`
position:fixed;
top:0;
left:0;
right:0;
height:70px;
background-color:#090b13;
display:flex;
justify-contente:space-between;
align-items:center;
padding:0 36px;
letter-spacing:16px;
z-index:3;
`;


const Logo = styled.a`
padding:0;
width:80px;
margin-top:4px
;
max-height:70px;
font-size:0;
display:Inline-block;

img{

display:block;
width:100%;
}

`
export default Header