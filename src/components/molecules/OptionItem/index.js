import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Icon, Heading, Paragraph } from 'components'
import { palette } from 'styled-theme'

const StyledIcon = styled(Icon)`
  display: grid;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const StyledHeading = styled(Heading)`
  font-size: 17.0345px;
  line-height: 20px;
  margin-bottom: 5px;
  margin-top: 0;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 12px;
  line-height: 14px;
  margin: 0;
`;

const TextWrapper = styled.div``;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr;
  box-sizing: border-box;
  padding: 1.5625rem 1.25rem;
  padding-left: 0;
  background-color: ${palette('white', 0, true)};
  border: 1px solid #BDBDBD;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-bottom: 1.25rem;
`;

const OptionItem = ({ ...props }) => {
  const { icon, title, description } = props;
  return (
    <Wrapper>
      <StyledIcon icon={icon} palette="primary" width={28} reverse />
      <TextWrapper>
        <StyledHeading>{title}</StyledHeading>
        <StyledParagraph>{description}</StyledParagraph>
      </TextWrapper>
    </Wrapper>
  )
}

OptionItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
}

export default OptionItem
