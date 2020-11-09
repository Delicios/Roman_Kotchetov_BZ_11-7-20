import React from 'react'
import { storiesOf } from '@storybook/react'
import { OptionItem } from 'components'

storiesOf('OptionItem', module)
  .add('default', () => (
    <OptionItem step={2} title="Title" icon="zap" description="Description">Hello</OptionItem>
  ))
