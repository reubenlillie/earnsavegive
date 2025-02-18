/**
 * @file The base layout
 * @author Reuben L. Lillie <reuben@earnsavegive.co>
 * @see {@link https://www.11ty.dev/docs/layouts/ Layouts in Eleventy}
 * @see {@link https://www.11ty.dev/docs/layout-chaining/ Layout chaining in Eleventy}
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#optional-data-method Optional `data` method in Eleventy JavaScript templates}
 */

/**
 * Defines markup for the base template
 * @since 0.1.0
 * @param {Object} data Elevent’s `data` object
 * @return {string} HTML
 */
export async function render(data) {
  var {
    copyright,
    meta
  } = data

  return `<!--_layouts/base.11ty.js-->
<!DOCTYPE html>
<html lang="${meta.locale.code}">
  <head>
    <title>${meta.title}</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${meta.description}">
    <style>
      body {
        font-family: sans-serif;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>${data.page.url === '/'
        ? meta.title
        : `<a href="/">${meta.title}</a>`
      }</h1>
      <p>${meta.tagline}</p>
    </header>
    <main>
      ${data.content}
    </main>
    <footer>
      <p>&copy; ${copyright.date} ${copyright.holder}</p>
    </footer>
  </body>
<html>`
}
