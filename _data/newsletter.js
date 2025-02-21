/**
 * @file Contains global data for the newsletter
 * @author Reuben L. Lillie <reuben@earnsavegive.co>
 */

/**
 * Global newletter module
 * @module _data/meta
 * @since 0.1.0
 * @see {@link https://www.11ty.dev/docs/data-global/ Global data files in Eleventy}
 */
export default {
  formAction: 'https://buttondown.com/api/emails/embed-subscribe/EarnSaveGive',
  onSubmitUrl: 'https://buttondown.com/EarnSaveGive',
  provider: {
    name: 'Buttondown',
    url: 'https://buttondown.com/refer/EarnSaveGive'
  }
}
