import React from 'react';
import styled from '@emotion/styled';
import LogoPng from 'images/logo192.png';

const StyledFooter = styled.div`
  margin-top: 260px;
  color: black;
  background-color: #fff1d7;
  padding: 60px 0;
`;

const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Logo = styled.div`
  width: 55px;
  height: 55px;
  background-image: url(${LogoPng});
  background-size: cover;
`;

const Text = styled.div`
  display: flex;
  color: #585858;
  justify-content: center;
`;

const Link = styled.a`
  margin-left: 7px;
  color: #000;
  font-weight: bold;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <StyledLogoContainer>
        <Logo></Logo>
      </StyledLogoContainer>
      <Text>
        Powered by <Link href="https://github.com/jungdu">Jungdu</Link>
      </Text>
    </StyledFooter>
  );
};

export default Footer;
