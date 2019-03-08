module.exports = {
  scenarios: [
    {
      name: 'Meta',
      props: {
        text: 'Meta'
      },

      preview: [
        {
          text: 'Meta'
        },
        {
          text: 'Meta with a really long label'
        }
      ]
    }, {
      name: 'Highlight',
      props: {
        text: 'Meta Highlight',
        modifier: 'meta--highlight'
      },

      preview: [
        {
          text: 'Meta Highlight',
          modifier: 'meta--highlight'
        },
        {
          text: 'Meta Highlight with a really long label'
        }
      ]
    }
  ],
  search: {
    aliases: ['']
  }
};
