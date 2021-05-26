// vue.config.js

/**
 // @ type {import('@vue/cli-service').ProjectOptions}
 */
 //function
 //module.exports = {
  //publicPath: "1017examen2vadymlityuk/examen2/dist/",
  //to list adn point
 //}

 module.exports = {
    configureWebpack: {
      module: {
        rules: [
          {
            test: /\.md$/i,
            use: 'raw-loader',
          },
        ],
      },
    },
  };