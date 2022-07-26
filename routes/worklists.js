const express = require('express');
const router = express.Router();
const workListsController = require('../controllers/workLists')

router.get('/', workListsController.getWorkListPage);
router.post('/createTask', workListsController.createTask);



module.exports = router;