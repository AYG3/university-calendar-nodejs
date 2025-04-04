import { Router } from 'express'
import eventRoutes from './eventRoutes.js'

const router = Router()

router.use(eventRoutes)

export default router;
