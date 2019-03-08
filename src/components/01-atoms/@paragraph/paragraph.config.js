module.exports = {
  scenarios: [
    {
      name: 'Paragraph',
      props: {
        text: 'This is an example paragraph'
      },

      preview: [
        {
          text: 'This is an example small paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          modifier: 'text-sm'
        }, {
          text: 'This is an example base paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }, {
          text: 'This is an example large paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          modifier: 'text-lg'
        }, {
          text: 'This is an example xlarge paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          modifier: 'text-xl'
        }
      ]
    }
  ],
  search: {
    aliases: ['text, typography, type']
  }
};
