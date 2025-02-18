/**
 * @file Contains metadata common to all pages, to reduce repetition
 * @author Reuben L. Lillie <reuben@earnsavegive.co>
 */

/**
 * Directory data module
 * @module pages
 * @since 0.1.0
 * @see {@link https://www.11ty.dev/docs/data-template-dir/ Template and directory data files in Eleventy}
 */
export default {
  layout: 'base',
  eleventyComputed: {
    permalink: data => `/${data.page.fileSlug}/index.html`
  }
}
