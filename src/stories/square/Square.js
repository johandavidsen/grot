import React from 'react';
import { createStore } from 'redux';
import { storiesOf, action } from '@kadira/storybook';

import Square  from '../../components/Square';

storiesOf('Square', module)
    .add('Default Square', () => (
            <Square />
        )
    )
