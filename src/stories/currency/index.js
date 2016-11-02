import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Currency from '../../components/currency/Currency'

var divStyle = {width: 350}

storiesOf('Currency', module)
  .add('Default Currency', () => (
      <div style={divStyle}>
        <Currency />
      </div>
    )
  )
