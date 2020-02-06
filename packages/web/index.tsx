import * as React from 'react';
import { render } from 'react-dom';
import { UI1, UI2 } from '@test/ui';

const App: React.FC = () => {
  return (
    <div>
      <UI1 />
      <UI2 />
    </div>
  )
}

render(<App />, document.getElementById('root'))