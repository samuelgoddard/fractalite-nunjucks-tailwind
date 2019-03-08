module.exports = {
  scenarios: [
    {
      name: 'Blockquote',
      props: {
        text: 'Blockquote',
        cite: 'Cite text goes here'
      },

      preview: [
        {
          text: 'Blockquote with pretty standard amount of text in it'
        },
        {
          text: 'Blockquote with quite a lot of text in it lorem ipsum dolor sit amet consectetuer adipicising elit aram et'
        }
      ]
    }
  ],
  search: {
    aliases: ['quote, testimonial']
  }
};
