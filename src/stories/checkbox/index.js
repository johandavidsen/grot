import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Checkbox from '../../components/checkbox'

storiesOf('Checkbox', module)
  .add('Default Checkbox', () => (
    <Checkbox />
    )
  )
