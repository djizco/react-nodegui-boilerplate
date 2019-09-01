import React from 'react';
import { Button, useEventHandler } from '@nodegui/react-nodegui';
import { QPushButtonEvents } from '@nodegui/nodegui';

import store from '_store';

import { decrement } from '_actions/counter';

export default function DecrementButton() {
  const btnHandler = useEventHandler(
    { [QPushButtonEvents.clicked]: () => store.dispatch(decrement()) },
    [],
  );

  return (
    <Button id="btn" text="Decrement" on={btnHandler} />
  );
}
