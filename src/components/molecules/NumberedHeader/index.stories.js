import React from 'react'
import { storiesOf } from '@storybook/react'
import { NumberedHeader } from 'components'

storiesOf('NumberedHeader', module)
  .add('default', () => (
    <NumberedHeader step={2}>Hello</NumberedHeader>
  ))
