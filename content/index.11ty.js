/**
 * @file The homepage template
 * @author Reuben L. Lillie <reuben@earnsavegive.co>
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#optional-data-method Optional `data` method in 11ty JavaScript templates}
 */

/** @type {Object} Acts as frontmatter data in JavaScript template files */
export var data = {
  eleventyComputed: {
    permalink: () => '/'
  },
  templateEngineOverride: '11ty.js,md'
}

/**
 * Defines markup for the base template
 * @since 0.1.0
 * @param {Object} data Elevent’s `data` object
 * @return {string} HTML
 */
export function render(data) {
  return `<!--content/index.11ty.js-->
## 🚧 Please pardon our dust while we build something nifty! 🏗️

🔜 ${data.meta.description}`
}
