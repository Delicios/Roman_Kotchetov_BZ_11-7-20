import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  Icon, Link, Paragraph, Heading
} from 'components'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 1rem;
  box-sizing: border-box;
  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }
`;

const StyledIcon = styled(Icon)`
  flex: none;
  @media screen and (max-width: 640px) {
    width: 32px;
  }
`;

const Text = styled.div`
  margin-left: 1rem;
  overflow: auto;
  > :first-child {
    margin: 0;
  }
`;

const Feature = ({
  icon, title, link, children, ...props
}) => {
  return (
    <Wrapper {...props}>
      {icon && <StyledIcon icon='umbrella' width={64} />}
      <Text>
        <Heading level={2}>
          {link ? <Link href={link}>{title}</Link> : title}
        </Heading>
        <Paragraph>{children}</Paragraph>
      </Text>
    </Wrapper>
  )
}

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  link: PropTypes.string,
  children: PropTypes.any,
}

export default Feature
