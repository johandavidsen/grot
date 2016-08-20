import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Hello from '../../components/Hello'

storiesOf('Hello', module)
    .add('Default Hello', () => (
            <Hello />
        )
    )
