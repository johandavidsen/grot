import React from 'react'
import { Currency } from '../src/components'

export default {
  title: 'Currency',
  component: Currency
}

export const ToStorybook = () => <Currency />

ToStorybook.story = {
  name: 'Default Currency'
}
