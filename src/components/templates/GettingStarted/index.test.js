import React from 'react'
import { mount, shallow } from 'enzyme'
import GettingStarted from '.'

it('mounts', () => {
  mount(<GettingStarted header="header" footer="footer">test</GettingStarted>)
})
