import React from 'react'
import { storiesOf } from '@kadira/storybook'

import SelectUser from '../../components/select-user'

storiesOf('Select User', module)
  .add('Default select user', () => (
      <SelectUser />
    )
  )
