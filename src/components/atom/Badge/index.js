import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Badge = styled.div`
  font-family: ${font('primary')};
  border-radius: 50%;
  padding: 0;
  font-size: 18px;
  height: 36px;
  width: 36px;
  line-height: 36px;
  background-color: ${palette('primary', 0, true)};
  color: ${palette('primary', 1, true)};
  text-align: center;
  font-weight: bold;
`

Badge.propTypes = {
  palette: PropTypes.string,
}

Badge.defaultProps = {
  palette: 'primary',
}

export default Badge
