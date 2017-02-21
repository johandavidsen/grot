import React from 'react'
import { storiesOf } from '@kadira/storybook'

import OptionMenu from '../../components/option-menu'

storiesOf('Option menu', module)
  .add('Default menu', () => (
      <OptionMenu />
    )
  )
