module.exports = {
  scenarios: [
    {
      name: 'Close',
      props: {
        modifier: 'black'
      },
    },{
      name: 'White',
      darkMode: true,
      noPad: false,
      props: {
        modifier: 'red'
      },
    }
  ],
  search: {
    aliases: ['x']
  }
};
