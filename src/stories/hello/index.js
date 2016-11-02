import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Hello from '../../components/hello'

storiesOf('Hello', module)
    .add('Default Hello', () => (
            <Hello />
        )
    )
