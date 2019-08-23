import React from 'react';
import { Window } from '@nodegui/react-nodegui';

import Main from '_environment/Main';

const fixedSize = { width: 500, height: 500 };

const styleSheet = `
  #container {
    flex-direction: column;
    min-height: '100%';
    align-items: 'center';
    justify-content: 'start';
    background-color: black;
  }
  #btn {
    font-size: 20px;
  }
  #result {
    font-size: 12px;
    color: white;
  }
`;

export default function Root() {
  return (
    <Window minSize={fixedSize} maxSize={fixedSize} styleSheet={styleSheet}>
      <Main />
    </Window>
  );
}
