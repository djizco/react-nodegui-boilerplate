import React from 'react';
import { Button, useEventHandler } from '@nodegui/react-nodegui';
import { QPushButtonEvents } from '@nodegui/nodegui';

import store from '_store';

import { increment } from '_actions/counter';

export default function IncrementButton() {
  const btnHandler = useEventHandler(
    { [QPushButtonEvents.clicked]: () => store.dispatch(increment()) },
    [],
  );

  return (
    <Button id="btn" text="Increment" on={btnHandler} />
  );
}
