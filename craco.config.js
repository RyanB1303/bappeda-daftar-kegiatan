module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')]
    }
  },
  devServer: {
    proxy: {
      '/v_bl/109': 'http://negaraapi.madiunkota.go.id:8888'
    }
  }
};
