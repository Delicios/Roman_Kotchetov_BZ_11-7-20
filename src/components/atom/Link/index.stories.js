import React from 'react'
import { storiesOf } from '@storybook/react'
import Link from '.'

storiesOf('Link', module)
  .add('default', () => (
    <Link href="/">Link</Link>
  ))
  .add('reverse', () => (
    <Link href="/" reverse>Link</Link>
  ))
  .add('another palette', () => (
    <Link href="/" palette="secondary">Link</Link>
  ))
