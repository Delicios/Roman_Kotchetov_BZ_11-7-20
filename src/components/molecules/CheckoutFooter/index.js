import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { palette } from 'styled-theme';
import { Button, Icon } from 'components';

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
  line-height: 34px;
  color: ${palette('grayscale', 4, true)};
  background: ${palette('grayscale', 0, true)};

  &:hover, &:focus, &:active {
    background-color: ${palette('success', 0, true)};
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.5;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.1);
    pointer-events: none;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

const CheckoutFooter = ({ ...props }) => {
  const { step } = props;
  return (
    <Wrapper>
      <div className="step-location">
        {step}
      </div>
      <ButtonWrapper>
        <StyledButton disabled className="disabled" href="/">
          <Icon icon="chevronUp"/>
        </StyledButton>
        <StyledButton href="/payment">
          <Icon icon="chevronDown" />
        </StyledButton>
      </ButtonWrapper>
    </Wrapper>
  )
}

CheckoutFooter.propTypes = {
  step: PropTypes.string
}

export default CheckoutFooter;
