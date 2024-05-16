import { App } from '@tinyhttp/app'
import { logger } from '@tinyhttp/logger'
import { Liquid } from 'liquidjs';

const engine = new Liquid();
const app = new App()

app
  .use(logger())
  .engine('liquid', engine)
  .set('views', './views')
  .set('view engine', 'liquid')

  .listen(3000, () => console.log(`Listening on http://localhost:3000`))
