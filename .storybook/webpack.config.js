const path = require('path')

module.exports = {
  module: {
    rules: [
        { test: /\.css?$/, use: [ 'style', 'raw' ], include: path.resolve(__dirname, '../') },
        { test: /\.scss$/, include: /src/, use: [ 'style', 'css', 'sass' ] }
    ]
  }
}
