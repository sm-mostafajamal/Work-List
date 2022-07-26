const WorkLists = require('../models/WorkLists');

module.exports = {
    getWorkListPage: async (req, res) => {
        try {
            const workListItems = await WorkLists.find();
            const tasksLeft = await WorkLists.countDocuments({ completed : false });
            res.render('workLists.ejs', {tasks: workListItems, left: tasksLeft});
        } catch (error) {
            console.error(error);   
        }
    },

    createTask: async (req,res) => {
        try {
            await WorkLists.create({ task: req.body.taskInput, completed: false});
            console.log('Task Successfully Added');
            res.redirect('/workLists');
        } catch (e) {
            console.error(e);    
        };
    },
    completedTask: async(req, res) => {
        try {
            await WorkLists.findOneAndUpdate({_id : req.body.taskId}, {completed : true});
            console.log('Task\'s been completed');
            res.json('Task\'s been completed');
        } catch (e) {
            console.error(e);
        }
    },
    unCompletedTask: async(req, res) => {
        try {
            await WorkLists.findOneAndUpdate({_id : req.body.taskId}, {completed : false});
            console.log('Task\'s changed to uncompleted');
            res.json('Task\'s changed to uncompleted');
        } catch (e) {
            console.error(e);
        }
    },

    deleteTask: async (req,res) => {
        try {
            await WorkLists.findOneAndDelete({ _id: req.body.taskId });
            console.log('Task Deleted Successfully');
            res.json('Task Deleted Successfully');
        } catch (e) {
            console.error(e);
        }
    }

}