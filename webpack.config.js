const path = require('path');

module.exports = {
    entry: {
        main:'./src/index.js',
        player:'./src/player.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    }
}