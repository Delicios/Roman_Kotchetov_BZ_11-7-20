import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'

const styles = css`
  font-family: ${font('primary')};
  margin: 0;
  padding: 0 1em;
  line-height: 1rem;

  color: ${palette({ grayscale: 0 }, 1)};
`

const Ol = styled.ol`${styles}`
const Ul = styled.ul`${styles}`

const List = ({ ordered, children, ...props }) => {
  return React.createElement(ordered ? Ol : Ul, props, children)
}

List.propTypes = {
  ordered: PropTypes.bool,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  children: PropTypes.any,
}

List.defaultProps = {
  palette: 'grayscale',
}

export default List
