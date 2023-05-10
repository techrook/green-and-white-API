import app from './app';
import { CONFIG } from './config';

const port = CONFIG.PORT;
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});
