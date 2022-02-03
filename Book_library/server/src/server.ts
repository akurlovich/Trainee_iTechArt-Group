import config from './common/config';
import app from './app';

// const PORT = config.PORT || 4000;

app.listen(config.PORT, () =>
  console.log(`App is running on ${config.API_URL}${config.PORT}`)
);