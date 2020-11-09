import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Icon } from 'components'

const StyledIcon = styled(Icon)`
  fill: ${palette('grayscale', 0, true)};
  height: 20px;
  width: 20px;
  transform: translate(0px, 5px);
`
const StyledBadge = styled.div`
  font-family: ${font('primary')};
  font-size: .9rem;
  line-height: 1.5rem;
  padding: 0.1em 0.3em;
  text-align: center;
  color: ${palette('grayscale', 1, true)};
`

const BrandBadge = ({ ...props }) => {
  return (
    <StyledBadge {...props}>
      <StyledIcon icon='zap'/> Powered by Briza
    </StyledBadge>
  )
}

export default BrandBadge
