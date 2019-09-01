import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, useEventHandler } from '@nodegui/react-nodegui';
import { QPushButtonEvents } from '@nodegui/nodegui';

import { decrement } from '_actions/counter';

export default function DecrementButton() {
  const dispatch = useDispatch();
  const btnHandler = useEventHandler(
    { [QPushButtonEvents.clicked]: () => dispatch(decrement()) },
    [],
  );

  return (
    <Button id="btn" text="Decrement" on={btnHandler} />
  );
}
