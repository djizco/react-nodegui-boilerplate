import React, { useState } from 'react';
import { View, Text, Button, useEventHandler } from '@nodegui/react-nodegui';
import { QPushButtonEvents } from '@nodegui/nodegui';
import { format } from 'date-fns';

export default function GetTime() {
  const [time, setTime] = useState(new Date());
  const btnHandler = useEventHandler(
    { [QPushButtonEvents.clicked]: () => setTime(new Date()) },
    [],
  );
  return (
    <View id="container">
      <Button id="btn" text="Update Time" on={btnHandler} />
      <Text id="result">{format(time, 'EEEE LLLL dd Y, h:mm:ss a')}</Text>
      <Text id="result">{`Time in epoc: ${time.getTime()}`}</Text>
    </View>
  );
}
