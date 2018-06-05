const path = require('path');
const express = require('express');
const webpack = require('webpack');

const app = express();

const config =
  process.env.NODE_ENV === 'production'
    ? require('./webpack.prod')
    : require('./webpack.dev');

const compiler = webpack(config);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(
  require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    contentBase: './dist'
  })
);

if (process.env.NODE_ENV === 'development') {
  app.use(require('webpack-hot-middleware')(compiler));
}

app.use('*', (req, res, next) => {
  const filename = path.join(compiler.outputPath, 'index.html');
  compiler.outputFileSystem.readFile(filename, function(err, result) {
    if (err) {
      return next(err);
    }
    res.set('content-type', 'text/html');
    res.send(result);
    res.end();
  });
});

app.listen(process.env.PORT || 3000, err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
