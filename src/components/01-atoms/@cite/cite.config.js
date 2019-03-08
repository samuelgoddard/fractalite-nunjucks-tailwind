module.exports = {
  scenarios: [
    {
      name: 'Cite',
      props: {
        text: 'Cite'
        // cite: 'Text'
      },

      preview: [
        {
          text: 'Cite'
        },
        {
          text: 'Cite with a really long label'
        }
      ]
    }
  ],
  search: {
    aliases: ['author']
  }
};
