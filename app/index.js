import React from 'react';
import { Renderer } from '@nodegui/react-nodegui';

import Root from '_environment/Root';

import configureStore from '_store/configureStore';

const store = configureStore();

Renderer.render(<Root store={store} />);
