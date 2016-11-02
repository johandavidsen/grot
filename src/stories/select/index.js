import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import Select from '../../components/select'

const accountPlan = [
  { id: '0102', description: 'Amazing', probability: '11' },
  { id: '0101', description: 'Amazing', probability: '44' },
  { id: '0104', description: 'Amazing', probability: '13' },
  { id: '0103', description: 'Amazing', probability: '14' },
  { id: '0105', description: 'Amazing', probability: '15' },
  { id: '0109', description: 'Amazing', probability: '0' },
  { id: '0107', description: 'Amazing', probability: '16' },
  { id: '0108', description: 'Amazing', probability: '17' },
  { id: '0106', description: 'Amazing', probability: '18' },
  { id: '0110', description: 'Amazing', probability: '55' },
  { id: '0111', description: 'Amazing', probability: '85' }
]

function onChange (input, resolve) {
  // Sort according to probability
  accountPlan.sort((a, b) => {
    if (a.probability < b.probability) {
      return 1
    }
    if (a.probability > b.probability) {
      return -1
    }
    // a must be equal to b
    return 0
  })

  // Sort according to id
  accountPlan.sort((a, b) => {
    if (a.id > b.id) {
      return 1
    }
    if (a.id < b.id) {
      return -1
    }
    // a must be equal to b
    return 0
  })

  resolve(accountPlan.filter((suggestion) => {
    if (input.lenght === 0) {
      return suggestion
    } else if (suggestion.id.match(new RegExp('^' + input.replace(/\W\s/g, ''), 'i'))) {
      return suggestion
    }
  }))
}

storiesOf('Select', module)
  .add('Default Select', () => (
    <Select
      autoFocus={false}
      disabled={false}
      placeholder=''
      onChange={onChange}
      />
    )
  )
