import express from 'express'
const router = express.Router()
import {
getallTickets,
getTickets,
getTicketsById,
deleteTicket,
createTicket,
updateTicket,
createHeading,
updateBody,
updateTicke,
updateHeading,
updateHeading2,
updateBody2,
deleteAll,
duplicateTicket,
createHeading2,
removeHeading,
removeHeading2,
isDeleted,
isSelected ,
cloneTicket,
clonetrueTicket,
NewTickets

} from '../controllers/ticketController.js'


router.post('/',createTicket)
router.get ('/:id',getTickets)
router.get('/',getallTickets)
router
  .route('/:id')
  .delete(deleteTicket)
  .post(getTicketsById)
  .put(updateTicket)
  router.route('/:id/headings').post(createHeading)
  router.route('/:id/headings').delete(removeHeading)
  router.route('/:id/headings2').delete(removeHeading2)
  router.route('/:id/headings2').post(createHeading2)
  router.route('/:ticketId/headings/:headingId').put(updateTicket);
  router.route('/:ticketId/body/:bodyId').put(updateBody);
  router.post('/:id/body',updateTicke)
  router.post('/:id/heading',updateHeading)
  router.post('/:id/heading2',updateHeading2)
  router.post('/:id/body2',updateBody2)
  router.put('/deleteall/:id',deleteAll)
  router.post('/duplicate',duplicateTicket)
  router.put('/:id/deleteticket/:templateid',isDeleted)
  router.post('/addtemp/:id',isSelected)
  router.put('/clone/:id',cloneTicket)
  router.put('/clonetrue/:id/:templateid',clonetrueTicket)
  router.post('/newtickets',NewTickets)

  export default router