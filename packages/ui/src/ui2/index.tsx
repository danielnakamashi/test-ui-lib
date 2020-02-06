import * as React from 'react';
import classNames from './ui2.scss'
import Mirror from './mirror.svg';

const UI2: React.FC = () => {
  return <div className={classNames.test}><Mirror /></div>
}

export { UI2 }