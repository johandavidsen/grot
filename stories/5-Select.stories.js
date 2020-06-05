import React from 'react'
import { Select } from '../src/components'

export default {
  title: 'Select',
  component: Select
}

export const ToStorybook = () => <Select />

ToStorybook.story = {
  name: 'Default Select'
}
