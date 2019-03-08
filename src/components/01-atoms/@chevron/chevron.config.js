module.exports = {
  scenarios: [
    {
      name: 'Chevron',
      props: {
        modifier: 'chevron--right'
      },

      preview: [
        {
          modifier: 'chevron--right'
        },{
          modifier: 'chevron--up'
        },{
          modifier: 'chevron--left'
        },{
          modifier: 'chevron--down'
        },
      ]
    },{
      name: 'Highlight',
      props: {
        modifier: 'chevron--highlight chevron--right'
      },

      preview: [
        {
          modifier: 'chevron--highlight chevron--right'
        },{
          modifier: 'chevron--highlight chevron--up'
        },{
          modifier: 'chevron--highlight chevron--left'
        },{
          modifier: 'chevron--highlight chevron--down'
        },
      ]
    },
  ],
  search: {
    aliases: ['arrow']
  }
};
