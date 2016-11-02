import React from 'react'

import './_square.scss'

export default () => (
  <div className='square'>
    <h2 className='square-title'><input type='text' /></h2>
    <div className='square-body'>
      <textarea className='u-full-width' />
    </div>
  </div>
)
