import React from 'react'
import { Credits } from '../src/components'

export default {
  title: 'Credits',
  component: Credits
}

export const ToStorybook = () => <Credits />

ToStorybook.story = {
  name: 'Default Credits'
}
