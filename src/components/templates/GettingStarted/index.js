import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import {
  Icon, FeatureList, Heading, Button, BrandBadge
} from 'components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-bottom: 25px;
`

const StyledIcon = styled(Icon)`
  margin: 0 auto;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  padding: 20px;
  background: ${palette('primary', 1, true)};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
  margin-bottom: .75rem;
  
  @media screen and (max-width: 640px) {
    margin-bottom: 45px;
  }
`;

const StyledHeading = styled(Heading)`
  text-align: center;
  font-weight: bold;
  font-size: 44px;
  line-height: 52px;
  margin-bottom: 3.75rem;

  @media screen and (max-width: 640px) {
    font-size: 40px;
    line-height: 47px;
  }
`;

const StyledButton = styled(Button)`
  background: ${palette('success', 1, true)};
  height: 50px;
  width: 312px;
  margin-top: 3rem;
  margin-bottom: 1rem;

  &:hover, &:focus, &:active {
    background-color: ${palette('success', 0, true)};
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
  }
  
  @media screen and (max-width: 640px) {
    margin-top: 4.375rem;
    margin-bottom: 3.75rem;
    width: 100%;
  }
`;

const GettingStarted = ({ ...props }) => {
  return (
    <Wrapper {...props}>
      <StyledIcon icon="umbrella" palette="primary" reverse/>
      <StyledHeading>So what gives?</StyledHeading>
      <FeatureList />
      <StyledButton href="/insurance-type">GET STARTED</StyledButton>
      <BrandBadge reverse>Hello</BrandBadge>
    </Wrapper>
  )
}

export default GettingStarted
