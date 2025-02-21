/**
 * @file Contains global social media data
 * @author Reuben L. Lillie <reube@earnsavegive.co>
 */

import pkg from './../package.json' with {type: 'json'}

/**
 * Global social media data module
 * @module _data/social
 * @since 0.1.0
 * @see {@link https://www.11ty.dev/docs/data-global/ Global data files in Eleventy}
 */
export default [
  {
    name: 'Bluesky',
    user: '@earnsavegive.co',
    url: 'https://bsky.app/profile/earnsavegive.co'
  },
  {
    name: 'GitHub',
    user: '@reubenlillie',
    url: pkg.homepage
  },
  {
    name: 'YouTube',
    user: '@EarnSaveGive',
    url: 'https://youtube.com/@EarnSaveGive'
  }
]
