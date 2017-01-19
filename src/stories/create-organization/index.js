import React from 'react'
import Provider from './Provider';
import { storiesOf } from '@kadira/storybook'

import CreateOrganization from '../../components/create-organization'

storiesOf('Create Organization', module)
  .addDecorator((getStory) => {
    return (<Provider story={getStory()} />)
  })
  .add('Default create organization', () => {
    return <CreateOrganization />
  })
