import React from 'react'
import { shallow } from 'enzyme'
import Feature from '.'

const wrap = (props = {}) => shallow(<Feature title="Test" {...props} />).dive()

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders title', () => {
  const wrapper = wrap()
  expect(wrapper.contains('Test')).toBe(true)
})


