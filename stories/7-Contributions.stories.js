import React from 'react'
import { Contributions } from '../src/containers'

export default {
  title: 'Contributions',
  component: Contributions
}

export const ToStorybook = () => <Contributions />

ToStorybook.story = {
  name: 'Default Contributions'
}
