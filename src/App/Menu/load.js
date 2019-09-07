import React from 'react';

import { DynamicImport } from '../DynamicImport';

export const Menu = (props) => (
  <DynamicImport load={() => import('../Menu')}>
      {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
   </DynamicImport>
)