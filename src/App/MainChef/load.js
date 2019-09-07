import React from 'react';

import { DynamicImport } from '../DynamicImport';

export const MainChef = (props) => (
  <DynamicImport load={() => import('../MainChef')}>
      {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
   </DynamicImport>
)