import React from 'react'
import { storiesOf } from '@storybook/react'
import Link from '.'

storiesOf('Link', module)
  .add('default', () => (
    <Link href="/">ARc repository</Link>
  ))
  .add('reverse', () => (
    <Link href="/" reverse>ARc repository</Link>
  ))
  .add('another palette', () => (
    <Link href="/" palette="secondary">ARc repository</Link>
  ))
