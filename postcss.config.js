// It is handy to not have those transformations while we developing
// if(process.env.NODE_ENV === 'production') {
//   module.exports = {
//     plugins: [
//       require('autoprefixer')({
//         'browsers': ['> 1%', 'last 2 versions']
//     }),
//       require('cssnano')
//     ]
//   }
// }

module.exports = {
  plugins: [
    require('autoprefixer')({
      'browsers': ['> 1%', 'last 2 versions']
  }),
    require('cssnano')
  ]
}
