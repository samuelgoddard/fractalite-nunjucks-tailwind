module.exports = {
  scenarios: [
    {
      name: 'Headings',
      props: {
        heading: 'This is an example heading',
        level: '1'
      },

      preview: [
        {
          heading: 'This is an example h1 heading.',
          level: '1'
        },{
          heading: 'This is an example h2 heading.',
          level: '2'
        }, {
          heading: 'This is an example h3 heading.',
          level: '3'
        }, {
          heading: 'This is an example h4 heading.',
          level: '4'
        }
      ]
    }
  ],
  search: {
    aliases: ['typography, type, title']
  }
};
