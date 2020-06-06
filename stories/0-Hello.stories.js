import React from 'react'
import { Hello } from '../src/components'

export default {
  title: 'Hello',
  component: Hello
}

export const ToStorybook = () => <Hello />

ToStorybook.story = {
  name: 'Default Hello'
}
