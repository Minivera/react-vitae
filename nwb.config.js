module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'react-bulma-vitae',
      externals: {
        react: 'React'
      }
    }
  }
}
