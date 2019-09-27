import React from 'react';
import { Renderer } from '@nodegui/react-nodegui';

import store from '_app/store';
import Root from '_environment/Root';

Renderer.render(<Root store={store} />);
