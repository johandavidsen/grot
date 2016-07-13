import React from 'react'

import '../stylesheets/components/_credits.scss'

/**
 * @class Credits
 *
 * Credits is along, the same lines as the Hello component. All it dose
 * is to display a HTML string.
 *
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
export default ( ) => (
  <div className="row">
    <div className="twelve columns">
      This module was made by <a href="">Jóhan Davidsen</a>, source code can be found on <a href="">Bitbucket</a> and the module is available on <a href="">NPM</a>.
    </div>
  </div>
)
