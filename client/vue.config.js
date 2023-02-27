const { defineConfig } = require('@vue/cli-service');
const fs = require('fs');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'app.example.local.dev',
    https: {
      cert: fs.readFileSync(
        '/Users/martinheitmann/workspaces/nestjs-socket-io-sample/certs/cert.pem',
      ),
      key: fs.readFileSync(
        '/Users/martinheitmann/workspaces/nestjs-socket-io-sample/certs/cert-key.pem',
      ),
    },
  },
});
