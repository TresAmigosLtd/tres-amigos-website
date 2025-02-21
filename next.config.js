const withSvgr = require('next-plugin-svgr');

module.exports = withSvgr({
  svgrOptions: {
    svgoConfig: {
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              cleanupIds: false,
            },
          },
        },
      ],
    },
  },
});