module.exports = {
  type: 'react-component',
  devServer: {
    compress: true,
    disableHostCheck: true
  },
  npm: {
    esModules: true,
    umd: {
      global: 'react-bulma-vitae',
      externals: {
        react: 'React',
        bloomer: 'Bloomer'
      }
    }
  }
}
