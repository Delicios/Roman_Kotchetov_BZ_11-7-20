import React from 'react'
import { mount, shallow } from 'enzyme'
import Checkout from '.'

it('mounts', () => {
  mount(<Checkout header="header" footer="footer">test</Checkout>)
})
