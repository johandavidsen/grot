import React from 'react'
import { OptionsMenu } from '../src/components'

export default {
  title: 'OptionsMenu',
  component: OptionsMenu
}

export const ToStorybook = () => <OptionsMenu />

ToStorybook.story = {
  name: 'Default OptionsMenu'
}
