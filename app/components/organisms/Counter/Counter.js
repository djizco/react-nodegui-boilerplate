import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from '@nodegui/react-nodegui';

import IncrementButton from '_atoms/IncrementButton';
import DecrementButton from '_atoms/DecrementButton';

export default function CounterSection() {
  const counter = useSelector(state => state.counter);

  return (
    <View>
      <IncrementButton />
      <DecrementButton />
      <Text>{`Counter: ${counter}`}</Text>
    </View>
  );
}
