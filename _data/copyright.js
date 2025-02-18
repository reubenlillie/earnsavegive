/**
 * @file Contains global copyright data
 * @author Reuben L. Lillie <reuben@earnsavegive.co>
 */

import meta from './meta.js'

/**
 * Global copyright data module
 * @module _data/copyright
 * @since 0.1.0
 * @see {@link https://www.11ty.dev/docs/data-global/ Global data files in Eleventy}
 */
export default {
  date: new Date().getFullYear(),
  holder: meta.title
}
