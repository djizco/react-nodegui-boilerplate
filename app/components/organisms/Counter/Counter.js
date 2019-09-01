import React, { useState, useEffect } from 'react';
import { View, Text } from '@nodegui/react-nodegui';

import store from '_store';

import IncrementButton from '_atoms/IncrementButton';
import DecrementButton from '_atoms/DecrementButton';

export default function CounterSection() {
  const [counter, setCounter] = useState(store.getState().counter);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const nextCounter = store.getState().counter;
      if (counter !== nextCounter) {
        setCounter(nextCounter);
      }
    });

    return unsubscribe;
  }, []);


  return (
    <View>
      <IncrementButton />
      <DecrementButton />
      <Text>{`Counter: ${counter}`}</Text>
    </View>
  );
}
