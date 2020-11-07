import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from '.'

storiesOf('Icon', module)
  .add('default', () => (
    <Icon icon="umbrella" />
  ))
  .add('palette', () => (
    <Icon icon="umbrella" palette="primary" />
  ))
  .add('palette reverse', () => (
    <Icon icon="umbrella" palette="primary" reverse />
  ))
  .add('height', () => (
    <Icon icon="umbrella" height={100} />
  ))
