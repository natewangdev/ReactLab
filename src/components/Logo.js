import React from 'react'
import styled from 'styled-components'

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px;
`

const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #61dafb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: spin 10s linear infinite;

  &::after {
    content: '';
    position: absolute;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 4px solid #61dafb;
    border-right-color: transparent;
    transform: rotate(45deg);
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const LogoText = styled.h1`
  color: #61dafb;
  font-size: 24px;
  font-weight: bold;
  margin: 0;

  span {
    color: #ffffff;
  }
`

const Logo = () => (
  <LogoContainer>
    <LogoIcon />
    <LogoText>
      React<span>Lab</span>
    </LogoText>
  </LogoContainer>
)

export default Logo
