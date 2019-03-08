module.exports = {
  scenarios: [
    {
      name: 'Callout',
      props: {
        heading: 'Callout',
        text: 'Cite text goes here'
      },

      preview: [
        {
          heading: 'Callout with plain text',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
        },
        {
          heading: 'Callout with some more rich text',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'
        }
      ]
    }
  ],
  search: {
    aliases: ['cta']
  }
};
