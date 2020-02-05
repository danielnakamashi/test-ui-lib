import * as React from 'react';
import { render } from 'react-dom';
import { UI1 } from '@test/ui1';
import { UI2 } from '@test/ui2';

const App: React.FC = () => {
  return (
    <div>
      <UI1 />
      <UI2 />
    </div>
  )
}

render(<App />, document.getElementById('root'))