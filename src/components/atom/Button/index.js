import React from 'react';;
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Link from 'react-router-dom';
import { palette } from 'styled-theme';

const styles = css`
  text-decoration: none;
  color: ${palette('grayscale', 4, true)};
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: .5rem;
  text-align: center;
  cursor: pointer;
  border: none;
  transition: ease .125s box-shadow, ease .125s background-color;
  color: #333;
  font-weight: bold;
  text-transform: uppercase;

  &:hover, &:focus, &:active {
    background-color: ${palette('success', 0, true)};
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
  }

  &:hover:disabled, &:focus:disabled {
    cursor: unset;
    background-color: rgba(239,239,239,.3);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  }
`

const StyledLink = styled(({
  disabled, ...props
}) => <Link {...props} />)`${styles}`

const Anchor = styled.a`${styles}`
const StyledButton = styled.button`${styles}`

const Button = ({ type, ...props }) => {
  const { to, href } = props
  if (to) {
    return <StyledLink {...props} />
  } if (href) {
    return <Anchor {...props} />
  }
  return <StyledButton {...props} type={type} />
}

Button.propTypes = {
  disabled: PropTypes.bool,
  palette: PropTypes.string,
  transparent: PropTypes.bool,
  reverse: PropTypes.bool,
  height: PropTypes.number,
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
}

Button.defaultProps = {
  palette: 'primary',
  type: 'button',
  height: 40,
}

export default Button
