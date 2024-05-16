import * as dotenv from '@tinyhttp/dotenv' 
import { App } from '@tinyhttp/app'
import { logger } from '@tinyhttp/logger'
import { Liquid } from 'liquidjs';
import serveStatic from 'serve-static';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const envFile = dotenv.config({path:'../token.env'})
var apiToken = process.env.API_TOKEN
console.log(apiToken)

const engine = new Liquid();
const app = new App()

const __filename = fileURLToPath(import.meta.url); // Convert the URL of the current module to a file path
const __dirname = dirname(__filename); // Get the directory name of the current module

app
  .use(logger())
  .use(serveStatic(path.join(__dirname, 'src')))
  .engine('liquid', engine)
  .set('views', './views')
  .set('view engine', 'liquid')

  .listen(8080, () => console.log(`Listening on http://localhost:8080`))

app.get('/', async (req, res) => {
    

  return res.send(renderTemplate('views/index.liquid', {title: 'Bieb in Bloei'}));
});


const renderTemplate = (template, data) => {
  return engine.renderFileSync(template, data)
}
