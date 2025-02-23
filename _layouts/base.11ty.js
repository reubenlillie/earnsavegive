/**
 * @file The base layout
 * @author Reuben L. Lillie <reuben@earnsavegive.co>
 * @see {@link https://www.11ty.dev/docs/layouts/ Layouts in Eleventy}
 * @see {@link https://www.11ty.dev/docs/layout-chaining/ Layout chaining in Eleventy}
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#optional-data-method Optional `data` method in Eleventy JavaScript templates}
 */

// Import modules
import catharticons from '@shenangopress/catharticons'

/**
 * Defines markup for the base template
 * @since 0.1.0
 * @param {Object} data Elevent’s `data` object
 * @return {string} HTML
 */
export async function render(data) {
  var {
    copyright,
    img: {logo},
    meta,
    newsletter,
    social
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
    <style>${this.fileExists('css/fonts.css')
      ? this.minifyCss(this.fileToString('css/fonts.css'))
      : '<!--No file at css/fonts.css-->'}</style>
  </head>
  <body>
    <header>
      ${this.fileExists(logo.filePath)
        ? this.fileToString(logo.filePath)
        : `<!--No logo file at ${logo.filePath}-->`
      }
      <h1>${data.page.url === '/'
        ? meta.title
        : `<a href="/">${meta.title}</a>`
      }</h1>
      <p>${meta.tagline}</p>
    </header>
    <main>
      ${data.content}
      <section>
        <h2>Sign up for our newsletter for the latest tips and deals.</h2>
        <form action="${newsletter.formAction}"
              method="post"
              target="popupwindow"
              onsubmit="window.open('${newsletter.onSubmitUrl}', 'popupwindow')"
              class="embeddable-buttondown-form">
          <label for="bd-email">Your email:</label>
          <input type="email" name="email" id="bd-email" />
          <input type="submit" value="Subscribe" />
          <span>via <a href="${newsletter.provider.url}" target="_blank">${newsletter.provider.name}</a></span>
        </form>
      </section>
    </main>
    <footer>
      <section>
        <ul>${social.map(account => `<li>
            <a href="${account.url}">${catharticons(account.name)}&nbsp;${account.name}</a>
          </li>`).join(' ')}</ul>
      </section>
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
