import React from 'react';
import { createStore } from 'redux';
import { storiesOf, action } from '@kadira/storybook';

import { Credits } from '../../components';

storiesOf('Credits', module)
    .add('Default Credits', () => (
            <Credits />
        )
    )
