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
