import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { IconButton, Button, Icon } from 'components'

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${palette('primary', 1, true)};
  height: 60px;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25);
`;

const StyledButton = styled(Button)`

`;

const CheckoutFooter = ({ ...props }) => {
  const { title, step } = props;
  return (
    <Wrapper>
      <StyledButton icon="chevron-up" />
      <StyledButton icon="chevron-down" />
    </Wrapper>
  )
}

export default CheckoutFooter;
