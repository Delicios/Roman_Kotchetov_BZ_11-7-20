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
  margin-bottom: 45px;
`

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
  background: ${palette('success', 0, true)};
  font-weight: bold;
  font-size: 18px;
  line-height: 50px;
  height: 50px;
  width: 312px;
  margin: auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: .5rem;
  margin-top: 4.375rem;
  margin-bottom: 3.75rem;
`;

const GettingStarted = ({ ...props }) => {
  return (
    <Wrapper {...props}>
      <StyledIcon icon="umbrella" palette="primary" reverse/>
      <StyledHeading>So what gives?</StyledHeading>
      <FeatureList />
      <StyledButton another palette reverse href="/insurance-type" >GET STARTED</StyledButton>
      <BrandBadge reverse>Hello</BrandBadge>
    </Wrapper>
  )
}

export default GettingStarted
