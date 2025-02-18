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
  description: 'EarnSaveGive shares tips and strategies to help you earn more, save smarter, and give back with purpose. Explore practical advice on credit cards, budgeting, investing, and charitable giving to build wealth and live a meaningful life. Life isn’t about how much you have, but what you do with it. Take control of your finances today—whether you’re just starting out or looking to optimize every dollar. Let’s put your money to work.',
  disclaimer: {
    heading: 'Our Promise to You',
    text: 'At EarnSaveGive, we’re dedicated to helping you earn more, save smarter, and give back with purpose. Some of the links on our site may earn us a commission if you apply for a product or service. This compensation, however, does not influence our reviews or recommendations. We value transparency so you can take charge of your financial future with confidence.'
  },
  madeWith: 'Made with 💚 from Chicago.',
  title: 'EarnSaveGive',
  tagline: 'All You Can and More',
  locale: {
    code: 'en-US',
    dateOptions: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  }
}
