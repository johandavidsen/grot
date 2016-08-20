import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Credits from '../../components/Credits'

storiesOf('Credits', module)
  .add('Default Credits', () => (
    <Credits />
    )
  )
