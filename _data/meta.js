/**
 * @file Contains global metadata
 * @author Reuben L. Lillie <reuben@earnsavegive.co>
 */

/**
 * Global metadata module
 * @module _data/meta
 * @since 0.1.0
 * @see {@link https://www.11ty.dev/docs/data-global/ Global data files in Eleventy}
 */
export default {
  baseUrl: 'https://earnsavegive.co', // No trailing slash
  description: 'EarnSaveGive helps you earn more 💰, save smarter 💡, and give back with purpose 💌. Get tips on credit cards 💳, budgeting 📊, investing 📈, and charitable giving 🫶 to build wealth 💸 and live meaningfully 🔑.',
  disclaimer: {
    heading: 'Our Promise to You',
    text: 'At Earn Save Give, we’re dedicated to helping you earn more, save smarter, and give back with purpose. Some of the links on our site may earn us a commission if you apply for a product or service. This compensation, however, does not influence our reviews or recommendations. We value transparency so you can make financial decisions with confidence.'
  },
  madeWith: 'Made with 💚 from Chicago.',
  title: 'Earn Save Give',
  tagline: 'All you can and more',
  locale: {
    code: 'en-US',
    dateOptions: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  }
}
