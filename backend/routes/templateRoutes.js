import express from 'express'
const router = express.Router()
import {

    createTemplate,
    getTemplate,
    getTemp,
    deleteTemplate
} from "../controllers/templeteController.js"


router.post('/',createTemplate)

router.get('/:id', getTemplate)

router.get('/all/:id',getTemp)

router.delete('/:id',deleteTemplate)

export default router