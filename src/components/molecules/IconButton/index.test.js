import React from 'react'
import { mount, shallow } from 'enzyme'
import IconButton from '.'

const wrap = (props = {}) => shallow(<IconButton icon="zap" {...props} />)

it('mounts with different combination of props', () => {
  mount(<IconButton icon="zap">test</IconButton>)
  mount(<IconButton icon="zap" right>test</IconButton>)
  mount(<IconButton icon="zap" responsive>test</IconButton>)
  mount(<IconButton icon="zap" collapsed>test</IconButton>)
  mount(<IconButton icon="zap" right responsive>test</IconButton>)
  mount(<IconButton icon="zap" />)
  mount(<IconButton icon="zap" right />)
  mount(<IconButton icon="zap" responsive />)
  mount(<IconButton icon="zap" right responsive />)
})

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('passes height to icon', () => {
  const wrapper = wrap({ height: 20 })
  expect(wrapper.find({ height: 20 / 2.5 })).toHaveLength(1)
})
