import express from 'express'
const router = express.Router()
import {

    createTemplate,
    getTemplate
} from "../controllers/templeteController.js"


router.post('/',createTemplate)

router.get('/', getTemplate)



export default router