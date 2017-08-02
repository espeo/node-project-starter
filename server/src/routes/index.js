import express from 'express'

const router = express.Router()

/**
 * @swagger
 * /api:
 *   get:
 *     tags: [index]
 *     description: Just a test endpoint to see if swagger is doing its job
 *     produces: [application/json]
 *     responses:
 *       200:
 *         description: api setup is working
 */
router.get('/', (req, res) => {
  res.send('')
})

export default router
