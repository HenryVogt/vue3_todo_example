module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: "ToDo's"
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/style.sass";'
      }
    }
  }
}
