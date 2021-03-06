module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'eejmc-front-end',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Front end for Islamic social media non-profit app, server side rendered.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  env: {
    production: {
      // Use the production api hosted on AWS Elastic Computer Cloud
      api: 'https://api.eejmc.org'
    },
    development: {
      // Use the development API hosted locally
      // NOTE: make sure to `$ yarn run dev` on the back end repo locally
      api: 'http://localhost:8091'
    }
  },
  plugins: ['~/plugins/vuetify.js', '~/plugins/vee-validate.js'],
  css: [
    '~/assets/style/app.styl'
  ],
  // add apollo module
  modules: ['@nuxtjs/apollo'],
  // give apollo module options
  apollo: {
    networkInterfaces: {
      default: '~/apollo/network-interfaces/default.js'
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vuetify'],
    extractCSS: true,
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
