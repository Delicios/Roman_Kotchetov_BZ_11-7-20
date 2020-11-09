import React from 'react'
import { storiesOf } from '@storybook/react'
import { PaymentPage } from 'components'

storiesOf('PaymentPage', module)
  .add('default', () => (
    <PaymentPage />
  ))
