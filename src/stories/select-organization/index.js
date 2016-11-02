import React from 'react'
import { storiesOf } from '@kadira/storybook'

import SelectOrganization from '../../components/select-organization'

storiesOf('Select Organization', module)
  .add('Default select organization', () => (
      <SelectOrganization
        />
    )
  )
