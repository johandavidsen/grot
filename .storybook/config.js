import { configure } from '@kadira/storybook';

function loadStories() {
  // require as many stories as you need.
  require("../src/stories/credits")
  require("../src/stories/hello")
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
configure(loadStories, module);
