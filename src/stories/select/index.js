import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import Select from '../../components/select'

storiesOf('Select', module)
  .add('Default Select', () => (
    <Select
      name='example'
      />
    )
  )
