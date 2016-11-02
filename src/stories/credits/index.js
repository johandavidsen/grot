import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Credits from '../../components/credits'

storiesOf('Credits', module)
  .add('Default Credits', () => (
    <Credits />
    )
  )
