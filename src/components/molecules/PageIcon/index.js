import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { palette } from 'styled-theme';
import { Icon } from 'components';

const StyledIcon = styled(Icon)`
  margin: 0 auto;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  padding: 20px;
  background: ${palette('primary', 1, true)};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
  margin-bottom: 45px;
`;

const PageIcon = ({ icon }) => {
  return (
    <StyledIcon icon={icon} palette="primary" reverse/>
  )
}


PageIcon.propTypes = {
  icon: PropTypes.string,
}

export default PageIcon;
