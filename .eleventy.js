/**
 * @file Configures options for Eleventy
 * @author Reuben L. Lillie <reuben@earnsavegive.co>
 * @see {@link https://www.11ty.dev/docs/config/ Eleventy Configuration}
 */

// Import native Node.js modules
import fs from 'node:fs/promises'

// Import local modules to help with configuration
import toCamelCase from './_includes/filters/to-camel-case.js'

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

  /**
   * Import modules from a directory and configure them with Eleventy
   * @since 0.1.0
   * @param {string} dir Directory path from which to import module files
   * @param {function} [callback=addJavaScriptFunction] `eleventyConfig` method
   * @return {Promise<function>} Passes each default export to the `callback`
   * @see _includes/filters/toCamelCase
   * @see {@link https://discord.com/channels/741017160297611315/1276983631184662663 Eleventy Discord}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import Dynamic `import()` on MDN}
   */
  async function configFromDir(dir, callback = 'addJavaScriptFunction') {
    /** @type {string[]} List the files in a directory */
    var files = await fs.readdir(dir)

    // Run on each of the files
    return await Promise.all(files.map(async fileName => {
      /** @type {string} Format fileName to pass to eleventyConfig[callback] */
      var name = toCamelCase(fileName)

      /** @type {Promise<function>} Import the module dynamically */
      var module = await import(`${dir}/${fileName}`)

      // Configure the default export from the module with Eleventy
      eleventyConfig[callback](name, module.default)
    }))
  }

  // Configure filters
  await configFromDir('./_includes/filters')

  /*
   * Copy assets to the output folder
   * @see {@link https://www.11ty.dev/docs/copy/ Passthrough File Copy in Eleventy}
   */
  eleventyConfig.addPassthroughCopy('fonts')
  eleventyConfig.addPassthroughCopy('img')
}
