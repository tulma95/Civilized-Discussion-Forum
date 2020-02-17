const logger = require('./logger')

const requestLogger = (req, res, next) => {
  logger.info('Method: ', req.method)
  logger.info('Path: ', req.path)
  logger.info('Body: ', req.body)
  logger.info('-------------')
  next()
}

const errorHandler = (error, req, res, next) => {
  logger.error(error.message)

  if (error.name === 'SequelizeValidationError') {
    return res.status(400).json({ error: error.message })
  } else if (error) {
    return res.status(400).json({ error: error.message })
  }
  next(error)
}

module.exports = {
  requestLogger,
  errorHandler
}
