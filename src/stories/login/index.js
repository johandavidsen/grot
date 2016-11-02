import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Login from '../../components/login'

storiesOf('Login', module)
  .add('Default Login', () => (
      <Login />
    )
  )
