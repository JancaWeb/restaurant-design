import React from 'react';

import { DynamicImport } from '../DynamicImport';

export const HomePage = (props) => (
  <DynamicImport load={() => import('../HomePage')}>
      {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
   </DynamicImport>
)