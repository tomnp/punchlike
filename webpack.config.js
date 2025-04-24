module.exports = {
  // This is a placeholder config to prevent webpack CLI errors
  // Next.js handles webpack internally so this won't be used for normal builds
  mode: 'production',
  entry: {
    main: './pages/index.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  }
}; 