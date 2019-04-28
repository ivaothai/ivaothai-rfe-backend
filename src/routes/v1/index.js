import express from 'express'

import eventRoutes from './eventRoutes'
import flightRoutes from './flightRoutes'

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).send({
    status: 'success',
    response: {
      message: 'healthy',
    },
  })
})

router.all('/', (req, res) => {
  res.status(405).send({
    status: 'failure',
    response: {
      message: 'invalid method',
    },
  })
})

router.use('/event', eventRoutes)
router.use('/flight', flightRoutes)

export default router
