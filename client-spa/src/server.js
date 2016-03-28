import http from 'http';
import app from './express-app';
import config from './config';

const server = new http.Server(app);

server.listen(config.port, (err) => {
  if (err) {
    console.error(err);
  }

  console.info(`----\n==> ✅ redux presentation is running`);
  const port = config.port || process.env.PORT;
  console.info(`==> 💻  Open http://localhost:${port} in a browser to view the app.`);
});