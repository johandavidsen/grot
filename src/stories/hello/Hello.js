import React from 'react';
import { createStore } from 'redux';
import { storiesOf, action } from '@kadira/storybook';

import Hello from '../../components/Hello';

storiesOf('Hello', module)
    .add('Default Hello', () => (
            <Hello />
        )
    )
