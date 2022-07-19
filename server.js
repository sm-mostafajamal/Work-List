const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

let db,
    dbName = 'Work-List',
    PORT = process.env.PORT || 8000,
    dbConnectionStr = process.env.DB_STRING;

// Database connection
MongoClient.connect(dbConnectionStr).then(client => {
    db = client.db(dbName);
    console.log(`Connected to ${dbName} Database`);
});

// Middlewares
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended : true }));
app.use(express.static('public'));
app.use(express.json());

// CRUD operation/API's

app.get('/', (req, res) => {
    db.collection('work-lists').find().toArray()
    .then(data => res.render('index.ejs', { info : data }))
    .catch( err => console.error(err));
});

app.post('/postTaskAPI', (req, res) => {
    db.collection('work-lists')
    .insertOne({ 
        task : req.body.task,
        completed : false
     }).then(result => {
        console.log(`"${req.body.task}" Added`);
        res.redirect('/');
    }).catch( err => console.error(err));
    
});


// for completion
app.put('/completedAPI', (req, res) => {
    db.collection('work-lists').updateOne(
        { task: req.body.completedTask, completed : false },
        { 
            $set : { 'completed' : true }
        }
    )
    .then(result => {
        console.log(`'${req.body.completedTask}' completed`);
        res.json(`'${req.body.completedTask}' completed`);
    })
});
// for undo completion
app.put('/unmarkAPI', (req, res) => {
    db.collection('work-lists').updateOne(
        { 
            task: req.body.completedTask,
            completed : true
        },
        { 
            $set : { 'completed' : false }
        }
    )
    .then(result => {
        console.log(`'${req.body.completedTask}' unmarked the task`);
        res.json(`'${req.body.completedTask}' unmarked the task`);
    })
});


app.delete('/deleteTaskAPI', (req, res) => {
    db.collection('work-lists').deleteOne({ task: req.body.selTask})
    .then(result => {
        console.log(`'${req.body.selTask}' has been Deleted`);
        res.json(`'${req.body.selTask}' has been Deleted`);
    })
});
// listening port
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));