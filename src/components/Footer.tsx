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

const StyledLogo = styled.div`
  width: 55px;
  height: 55px;
  background-image: url(${LogoPng});
  background-size: cover;
`;

const StyledText = styled.div`
  display: flex;
  color: #585858;
  justify-content: center;
`;

const StyledLink = styled.a`
  margin-left: 7px;
  color: #000;
  font-weight: bold;
`;

const StyledHitsContainer = styled.div`
  text-align: center;
  margin-top: 15px;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <StyledLogoContainer>
        <StyledLogo></StyledLogo>
      </StyledLogoContainer>
      <StyledText>
        Powered by
        <StyledLink href="https://github.com/jungdu">Jungdu</StyledLink>
      </StyledText>
      <StyledHitsContainer>
        <a href="https://hits.seeyoufarm.com">
          <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fnice-coast-0d9da6500.azurestaticapps.net&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=today%2Ftotal&edge_flat=false" />
        </a>
      </StyledHitsContainer>
    </StyledFooter>
  );
};

export default Footer;
