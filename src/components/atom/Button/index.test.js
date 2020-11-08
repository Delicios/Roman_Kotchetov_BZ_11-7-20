import React from 'react'
import { shallow } from 'enzyme'
import Button from '.'

const wrap = (props = {}) => shallow(<Button {...props} />).dive()

it('renders button', () => {
  const wrapper = wrap()
  expect(wrapper.find('button')).toHaveLength(1)
})

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders anchor when href is passed in', () => {
  const wrapper = wrap({ href: 'test' })
  expect(wrapper.find('a')).toHaveLength(1)
})

