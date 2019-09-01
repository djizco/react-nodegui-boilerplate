import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, useEventHandler } from '@nodegui/react-nodegui';
import { QPushButtonEvents } from '@nodegui/nodegui';

import { increment } from '_actions/counter';

export default function IncrementButton() {
  const dispatch = useDispatch();

  const btnHandler = useEventHandler(
    { [QPushButtonEvents.clicked]: () => dispatch(increment()) },
    [],
  );

  return (
    <Button id="btn" text="Increment" on={btnHandler} />
  );
}
