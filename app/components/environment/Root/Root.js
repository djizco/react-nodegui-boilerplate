import React from 'react';
import PropTypes from 'prop-types';
import { Window } from '@nodegui/react-nodegui';

import Main from '_environment/Main';

const fixedSize = { width: 500, height: 500 };

const styleSheet = `
  #container {
    flex-direction: column;
    min-height: '100%';
    align-items: 'center';
    align-content: 'center';
  }
  #btn {
    font-size: 20px;
  }
  #text {
    min-width: 60px;
  }
`;

export default function Root({ store }) {
  return (
    <Window minSize={fixedSize} maxSize={fixedSize} styleSheet={styleSheet}>
      <Main />
    </Window>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
