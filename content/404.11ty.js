/**
 * @file The 404 page template
 * @author Reuben L. Lillie <reuben@earnsavegive.co>
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#optional-data-method Optional `data` method in 11ty JavaScript templates}
 */

/** @type {Object} Acts as frontmatter data in JavaScript template files */
export var data = {
  title: '404 Page Not Found',
  eleventyComputed: {
    permalink: () => '404.html'
  },
  templateEngineOverride: '11ty.js,md'
}

/**
 * Defines markup for the 404 page
 * @since 0.1.0
 * @param {Object} data Elevent’s `data` object
 * @return {string} HTML
 */
export function render(data) {
  return `<!--content/404.11ty.js-->
# Oops!

Looks like that page isn’t in our portfolio.

Let’s help you get back on track:

<a href="/">Home</a>`
}
