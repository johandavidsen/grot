import React from 'react'
import './Hello.scss'

/**
 * @class Hello
 *
 * This is the HelloWorld component for the Grót Module. This function only
 * display a simple HTML string.
 *
 * @since 0.1.1
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
export default () => (
  <div className='grot-hello-world'>
    <h1>
      Hello from Grót
    </h1>
    <h5>A sample library developed by <a href='http://fjakkarin.com'>Jóhan H. Dam-Davidsen</a></h5>
  </div>
)
