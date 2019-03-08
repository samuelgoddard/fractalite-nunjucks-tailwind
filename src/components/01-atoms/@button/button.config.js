module.exports = {
  scenarios: [
    {
      name: 'Button',
      props: {
        text: 'Button'
      },

      preview: [
        {
          text: 'Button'
        },
        {
          text: 'Button with a long label'
        }
      ]
    },
    {
      name: 'Primary',
      props: {
        text: 'Primary',
        modifier: 'btn--primary',
      },

      preview: [
        {
          text: 'Primary Button'
        },
        {
          text: 'Primary Button with a long label'
        }
      ]
    },
    {
      name: 'Block',
      props: {
        text: 'Block Button',
        modifier: 'btn--block'
      },
      preview: [
        {
          text: 'Block Button'
        },
        {
          text: 'Block Button with a long label'
        }
      ]
    },
    {
      name: 'Small',
      props: {
        text: 'Small Button',
        modifier: 'btn--small'
      },
      preview: [
        {
          text: 'Small Button'
        },
        {
          text: 'Small Button with a long label'
        }
      ]
    }
  ],
  search: {
    aliases: ['clicker']
  }
};
