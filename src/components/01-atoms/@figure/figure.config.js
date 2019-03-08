module.exports = {
  scenarios: [
    {
      name: 'image',
      props: {
        src: 'https://picsum.photos/500/350/?random',
        alt: 'Image alt text'
      }
    },
    {
      name: 'image-with-caption',
      props: {
        src: 'https://picsum.photos/500/350/?random',
        alt: 'Image alt text',
        caption: 'A placeholder image provided by Unsplash.it'
      }
    }
  ]
};
