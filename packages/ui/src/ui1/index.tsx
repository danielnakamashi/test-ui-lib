import * as React from 'react';
import classNames from './ui1.scss'
import search from './search.png'

const UI1: React.FC = () => {
  return <div className={classNames.test}><img src={search} /></div>
}

export { UI1 }