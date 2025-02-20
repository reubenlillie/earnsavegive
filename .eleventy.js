/**
 * @file Configures options for Eleventy
 * @author Reuben L. Lillie <reuben@earnsavegive.co>
 * @see {@link https://www.11ty.dev/docs/config/ Eleventy Configuration}
 */

/**
 * Eleventy’s configuration module
 * @module .eleventy
 * @since 0.1.0
 * @param {Object} eleventyConfig Eleventy’s Config API
 * @return {Object} Eleventy’s Config object optional
 */
export default async function (eleventyConfig) {
  /*
   * Store layouts in a directory separate from `_includes`
   * @see {@link https://www.11ty.dev/docs/config/#directory-for-layouts-optional Directory for Eleventy layouts}
   */
  eleventyConfig.setLayoutsDirectory('_layouts')

  /*
   * Copy assets to the output folder
   */
  eleventyConfig.addPassthroughCopy('fonts')
  eleventyConfig.addPassthroughCopy('img')
}
