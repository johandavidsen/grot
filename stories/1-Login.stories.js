import React from 'react'
import { Login } from '../src/components'

export default {
  title: 'Login',
  component: Login
}

export const ToStorybook = () => <Login />

ToStorybook.story = {
  name: 'Default Login'
}
