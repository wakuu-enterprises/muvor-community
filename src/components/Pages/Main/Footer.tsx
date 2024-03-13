import React from 'react';
import { styled } from 'styled-components';

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #060b0c;
  color: #fff;
  padding: 16px;
  text-align: center;
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <p>Muvor® Community. 2020-2024 All Rights Reserved.</p>
      <p>Theme by <a href={'https://wakuuenterprises.com'} style={{ color: 'white' }}>Wakuu</a></p>
    </FooterWrapper>
  );
};

export default Footer;
