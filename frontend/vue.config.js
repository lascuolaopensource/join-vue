module.exports = {
  pluginOptions: {
    apollo: {
      enableMocks: true,
      enableEngine: true,
      lintGQL: true,
      cors: '*',
      timeout: 120000,
      integratedEngine: false,
      typescript: false,
      serverOptions: {
      },
    },
  },
}