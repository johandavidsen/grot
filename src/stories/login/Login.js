import React from 'react';
import { createStore } from 'redux';
import { storiesOf, action } from '@kadira/storybook';

import { Login } from '../../components';

storiesOf('Login', module)
    .add('Default Login', () => (
            <Login />
        )
    )
