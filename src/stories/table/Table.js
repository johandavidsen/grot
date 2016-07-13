import React from 'react';
import { createStore } from 'redux';
import { storiesOf, action } from '@kadira/storybook';

import { Table } from '../../components';

storiesOf('Table', module)
    .add('Default Table', () => (
            <Table />
        )
    )
