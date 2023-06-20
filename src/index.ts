import app from './app';
import { CONFIG } from './config';
import  connect  from './config/db.config';

const port = CONFIG.PORT;
app.listen(port, async() => {
  console.log(`Listening: http://localhost:${port}`);

  await connect();
});
