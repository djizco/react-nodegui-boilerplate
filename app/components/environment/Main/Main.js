import React from 'react';
import { View } from '@nodegui/react-nodegui';

import GetTime from '_organisms/GetTime';

export default function Main() {
  return (
    <View id="container">
      <GetTime />
    </View>
  );
}
