import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Contributions from '../../containers/Contributions'

storiesOf('Contributions', module)
  .add('Default Credits', () => (
      <Contributions />
    )
  )
