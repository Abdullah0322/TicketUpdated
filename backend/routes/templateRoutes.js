import express from 'express'
const router = express.Router()
import {

    createTemplate,
    getTemplate,
    getTemp
} from "../controllers/templeteController.js"


router.post('/',createTemplate)

router.get('/:id', getTemplate)

router.get('/',getTemp)

export default router