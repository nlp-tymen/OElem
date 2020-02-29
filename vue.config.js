var webpack = require('webpack');

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/nlp_vue/'
        : '/',
    configureWebpack: {
      plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
            // In case you imported plugins individually, you must also require them here:
            Util: "exports-loader?Util!bootstrap/js/dist/util",
            Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
        })
      ]
    }
  }
