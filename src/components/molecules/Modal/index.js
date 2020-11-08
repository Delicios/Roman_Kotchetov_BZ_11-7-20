import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import ReactModal from 'react-modal'
import { font, palette } from 'styled-theme'

import { Heading, Button, Icon } from 'components'

const overlayStyles = css`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 9999;
  transition: opacity 250ms ease-in-out;
  opacity: 0;
  &[class*="after-open"] {
    opacity: 1;
  }
  &[class*="before-close"] {
    opacity: 0;
  }
`

const ModalBox = styled(ReactModal)`
  position: absolute;
  display: flex;
  flex-direction: column;
  font-family: ${font('primary')};
  background-color: ${palette('grayscale', 1, true)};
  border-radius: 0.5em;
  color: ${palette('grayscale', 0)};
  top: calc(50% - 1rem);
  left: calc(50% - 1rem);
  right: auto;
  bottom: auto;
  margin: 1rem calc(-50% + 1rem) 1rem 1rem;
  transform: translate(-50%, 100%);
  transition: transform 16ms ease;
  outline: none;
  box-sizing: border-box;
  min-width: 320px;
  max-width: calc(640px - 1rem);
  max-height: calc(100% - 1rem);
  padding-top: ${({ hasHeader }) => hasHeader ? 0 : '1rem'};
  box-shadow: 0 25px 50px rgba(0,0,0,0.2);
  overflow: hidden;
  
  @media screen and (max-width: 640px) {
    width: calc(100%);
    min-width: 320px;
    max-width: 640px;
    height: 100vh;
    top: 50%;
    left: 50%;
    border-radius: 0em;
    margin: 0;
  }
  &[class*="after-open"] {
    transform: translate(-50%, -50%);
  }
  &[class*="before-close"] {
    transform: translate(-50%, 100%);
  }
`

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0.5rem 2rem;
  height: 60px;
  > *:first-child {
    flex: 1;
  }
`

const StyledHeading = styled(Heading)`
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: ${palette('primary', 1, true)};
  font-size: .9rem;
`;

const StyledIcon = styled(Icon)`
  transform: translate(0, 11px);
  margin-right: 8px;
  margin-bottom: 10px;
  margin-top: 0;
  fill: ${palette('primary', 1, true)};
`;

const StyledButton = styled(Button)`
  border-radius: 50%;
  border: none;
  width: 36px;
  height: 36px;
  padding: 0;
  background: none;
  box-shadow: none;
  color: ${palette('primary', 0, true)};
  
  &:hover, &:focus, &:active {
    background-color: ${palette('success', 1, true)};
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.1);
    color: ${palette('grayscale', 0, true)};
  }
  
  &:focus {
    outline: none;
  }
`;

const Content = styled.div`
  overflow: auto;
  padding: 0 2rem;
  margin-bottom: 1rem;
`

const StyledReactModal = styled(({ className, ...props }) => (
  <ModalBox overlayClassName={className} closeTimeoutMS={250} {...props} />
))`${overlayStyles}`;


const Modal = ({
  children, title, closeable, onClose, ...props
}) => {
  const { reverse } = props
  const hasHeader = title || closeable

  return (
    <StyledReactModal
      contentLabel={title || 'Modal'}
      onRequestClose={onClose}
      hasHeader={hasHeader}
      appElement={document.getElementById('app')}
      {...props}
    >
      {hasHeader
        && (
        <Header>
          <StyledHeading level={2} reverse={reverse}>
            {title && <StyledIcon icon='umbrella' width={26} />} {title}
          </StyledHeading>
          {closeable && <StyledButton onClick={onClose} reverse transparent><Icon icon="close" /></StyledButton>}
        </Header>
        )
      }
      <Content>
        {children}
      </Content>
    </StyledReactModal>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  closeable: PropTypes.bool,
  reverse: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
}

export default Modal
