import React from 'react'
import { Checkbox } from '../src/components'

export default {
  title: 'Checkbox',
  component: Checkbox
}

export const ToStorybook = () => <Checkbox />

ToStorybook.story = {
  name: 'Default Checkbox'
}
