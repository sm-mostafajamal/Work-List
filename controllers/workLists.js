const WorkLists = require('../models/WorkLists');

module.exports = {
    getWorkListPage: async (req, res) => {
        try {
            res.render('workLists.ejs')
            
        } catch (error) {
            console.error(error);   
        }
    },

    createTask: async (req,res) => {
        try {
            await WorkLists.create({ task: req.body.taskInput, completed: false})
            console.log('Task Successfully Added')
            res.redirect('/workLists')
        } catch (e) {
            console.error(e);    
        }

    }

}