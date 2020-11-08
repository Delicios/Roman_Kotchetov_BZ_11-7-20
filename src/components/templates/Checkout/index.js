import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import {
  Icon, NumberedHeader, Heading, Paragraph, OptionItem, CheckoutFooter
} from 'components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-bottom: 4rem;
`;

const Checkout = ({ ...props }) => {
  return (
    <Wrapper {...props}>
      <NumberedHeader title="What type of insurance are you looking for?" step={1}/>
      <OptionItem icon="briefcase" title="Professional Liability" description="Erros & Omissions (E&O insurance)" />
      <OptionItem icon="cloud-rain" title="General Liability" description="Help mitigate against loss (CGL insurance)" />
      <OptionItem icon="package" title="Business Owner’s Policy" description="The complete package (BOP)" />
      <OptionItem icon="wifi" title="Cyber" description="Internet-bsed risks (CLIC)" />
      <CheckoutFooter step={1}/>
    </Wrapper>
  )
}

export default Checkout
