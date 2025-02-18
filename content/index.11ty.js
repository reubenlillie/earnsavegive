/**
 * @file The homepage template
 * @author Reuben L. Lillie <reuben@earnsavegive.co>
 */

/**
 * Acts as frontmatter data in JavaScript template files
 * @since 0.1.0
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#optional-data-method Optional `data` method in 11ty JavaScript templates}
 */
export var data = {
  eleventyComputed: {
    permalink: () => '/'
  },
  templateEngineOverride: '11ty.js,md'
}

/**
 * Defines markup for the base template
 * @param {Object} data Elevent’s `data` object
 * @return {string} HTML
 */
export function render(data) {
  return `<!--index.11ty.js-->
## 🚧 Please pardon our dust with we build something nifty! 🏗️

🔜 ${data.meta.description}`
}
