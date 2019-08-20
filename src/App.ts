import { GraphQLServer } from 'graphql-yoga/dist/index';
import User from './sequelize/models/User'
import bodyParser from 'body-parser';
import dbConnector from './sequelize/connector';
import logger from 'morgan';
import schema from './graphql/schema';

dbConnector.authenticate()
  .then(() => {
      console.log('db Connection success');
  })
  .catch( (err: any) => {
      console.log(err);
  })

//model sync
User.sync({force: false})

const PORT = process.env.PORT || 3000;

const grahqlServer = new GraphQLServer({
  schema
})

grahqlServer.express.use(bodyParser.json())
grahqlServer.express.use(bodyParser.urlencoded({extended: false}))
grahqlServer.express.use(logger('dev'))

grahqlServer.start({
  port: PORT
}, () => {
  console.log(`graphql_server running on ${PORT}`)
})
