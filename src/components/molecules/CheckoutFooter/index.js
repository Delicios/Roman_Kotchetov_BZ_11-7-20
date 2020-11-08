import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { Button, Icon } from 'components'

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${palette('primary', 1, true)};
  height: 60px;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25);
  color: white;
  font-weight: bold;
  font-size: 18px;
  line-height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: baseline;
  padding: 0 2rem;
`;

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  align-content: center;
`;

const StyledButton = styled(Button)`
  height: 36px;
  width: 36px;
  color: ${palette('grayscale', 4, true)};
`;

const CheckoutFooter = ({ ...props }) => {
  const { title, step } = props;
  return (
    <Wrapper>
      <div className="step-location">
        1/7
      </div>
      <ButtonWrapper>
        <StyledButton disabled>
          <Icon icon='chevronUp'/>
        </StyledButton>
        <StyledButton>
          <Icon icon='chevronDown' />
        </StyledButton>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default CheckoutFooter;
