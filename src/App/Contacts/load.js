import React from 'react';

import { DynamicImport } from '../DynamicImport';

export const Contacts = (props) => (
  <DynamicImport load={() => import('../Contacts')}>
      {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
   </DynamicImport>
)