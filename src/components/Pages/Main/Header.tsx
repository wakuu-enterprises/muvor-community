import React from 'react';
import { styled } from 'styled-components';

import CommunityLogo from '../../../images/Muvor.png'
// import { LoginButton } from '@pages/MyAssets/Auth/loginButton.tsx';
// import { LogoutButton } from '@pages/MyAssets/Auth/logoutButton.tsx';

const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #060b0c;
  color: #fff;
  padding: 16px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 8px;
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Logo = styled.img`
  max-width: 100%;
  height: auto;
`;

// const LoginButton = styled.button`
//   background-color: #fff;
//   color: #222;
//   border: none;
//   padding: 8px 16px;
//   font-size: 16px;
//   cursor: pointer;
//   margin-left: 16px;

//   @media (max-width: 768px) {
//     margin-top: 8px;
//   }
// `;

const Header: React.FC = () => {
  // const handleLogin = () => {
  //   // Add your login logic here
  //   alert('Login button clicked!');
  // };

  return (
    <HeaderWrapper>
      <Logo src={CommunityLogo} alt="Muvor Community" />
      {
      //   <LoginButton />
      // <LogoutButton />
      }
      {/* <LoginButton onClick={handleLogin}>Login</LoginButton> */}
    </HeaderWrapper>
  );
};

export default Header;

