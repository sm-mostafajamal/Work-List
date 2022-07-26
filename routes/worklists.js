const express = require('express');
const router = express.Router();
const workListsController = require('../controllers/workLists')

router.get('/', workListsController.getWorkListPage);
router.post('/createTask', workListsController.createTask);
router.put('/completedTask', workListsController.completedTask);
router.put('/unCompletedTask', workListsController.unCompletedTask);
router.delete('/deleteTask', workListsController.deleteTask);




module.exports = router;