import express from 'express'
import initializeSwagger from './swagger'
import indexRoute from './routes/index'
import initializeMiddleware from './middleware/initializeMiddleware'
import getConfig from './config/config'
import db from './models/index'

let app = express()

initializeSwagger(app)

initializeMiddleware(app)

app.use('/api', indexRoute)

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

app.listen(getConfig('port'), () => {
  console.log('App ready')
})
