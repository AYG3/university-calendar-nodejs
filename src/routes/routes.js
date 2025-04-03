import { Router } from 'express'
import Event from '../mongoose/EventModel.js'
import eventRoutes from './eventRoutes.js'

const router = Router()
router.use(eventRoutes)
