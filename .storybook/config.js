import { configure } from '@kadira/storybook'

function loadStories () {
  // require as many stories as you need.
  require('../src/stories/hello')
  require('../src/stories/credits')
  require('../src/stories/login')
  require('../src/stories/select')
  require('../src/stories/currency')
  require('../src/stories/Contributions')
}

/**
 * @module config
 *
 * This module is used to configure Storybook.
 *
 * @since 0.2.0
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
configure(loadStories, module)
