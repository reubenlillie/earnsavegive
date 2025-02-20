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
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💰</text></svg>">
    <style>
      /**
       * Add Metropolis font by Chris Simpson
       * @see {@link https://github.com/dw5/metropolis Metropolis on GitHub}
       */
      @font-face {
        font-family: Metropolis;
        src:
          local(Metropolis),
          url('/fonts/metropolis/Metropolis-Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: Metropolis;
        src:
          local(Metropolis),
          url('/fonts/metropolis/Metropolis-Bold.woff2') format('woff2');
        font-weight: 700;
        font-display: swap;
      }
      @font-face {
        font-family: Metropolis;
        src:
          local(Metropolis),
          url('/fonts/metropolis/Metropolis-RegularItalic.woff2') format('woff2');
        font-weight: 400;
        font-style: italic;
        font-display: swap;
      }
      @font-face {
        font-family: Metropolis;
        src:
          local(Metropolis),
          url('/fonts/metropolis/Metropolis-BoldItalic.woff2') format('woff2');
        font-weight: 700;
        font-style: italic;
        font-display: swap;
      }
      body {
        font-family: Metropolis, sans-serif;
      }
    </style>
  </head>
  <body>
    <header>
      <img src="/img/logo.svg" alt="EarnSaveGive logo: the letters E-S-G with the S styled as a US dollar symbol">
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
      <section>
        <h2>${meta.disclaimer.heading}</h2>
        <p><em>${meta.disclaimer.text}</em></p>
      </section>
      <section>
        <p>&copy; ${copyright.date} ${copyright.holder}</p>
      </section>
    </footer>
  </body>
<html>`
}
