/*********************************/

var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');


var MongoClient = require('mongodb').MongoClient;
// Connect to the db


// app.use(function (req, res) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    
// });








//var db = ('mongodb://raw-at:raw-at@ds143449.mlab.com:43449/todo_data',['todos']);



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//get Tos
app.get('/putTodo',function(req,res){


    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

   MongoClient.connect('mongodb://raw-at:raw-at@ds143449.mlab.com:43449/todo_data', function(err, db) {
   //MongoClient.connect('mongodb://localhost:27017/mygovt', function(err, db) {
    if(err) { return console.dir(err); }

  var collection = db.collection('todos');
  var backData = collection.find().toArray(function(err, docs) {

       
       console.log("Found the following records");
       console.dir(docs);
       res.send(docs);
   });



});
});
/*
//get Single Todos
router.get('/todo/:id',function(req,res,next){

    db.todos.findOne({_id:mongojs.ObjectId(req.params.id)},function(err,todo){

        if(err){

            res.send(err);
        }
        else{
            
            res.json(todo); 
        
            }

    });

});

*/

//Save Todos
app.post('/getTodo',function(req,res){

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
    var todo = JSON.parse(req.body.data);
    // var email = req.body.email;
   
    console.log(todo);
    MongoClient.connect('mongodb://raw-at:raw-at@ds143449.mlab.com:43449/todo_data', function(err, db) {
    //MongoClient.connect('mongodb://localhost:27017/mygovt', function(err, db) {
    if(err) { return console.dir(err); }

  var collection = db.collection('todos');
  collection.insert(todo);
  res.send("success");

  });



        /*
        db.save(todo,function(err,result){

            if(err){
                res.send(err);
            }
            else{

                res.json(result);
            }


        });
    }*/

});


/*
//Update

router.put('/todo/:id',function(req,res,next){

    var todo = req.body;
    var updObj = {};

    if(todo.isCompleted){

        updObj.isCompleted = todo.isCompleted;
    }

    if(todo.text){

        updObj.text = todo.text;
    }
    if(!updObj){
        res.status(400);
        res.json({
            "error":"Invalid Data"
        });
    }
    else{
        db.todos.update({

            _id:mongojs.ObjectId(req.params.id)

        },updObj,{},function(err,result){

            if(err){
                res.send(err);
            }
            else{
                res.json(result);
            }
        });

    }
});

//Delete

router.delete('/todo/:id',function(req,res,next){

    if(!updObj){
        res.status(400);
        res.json({
            "error":"Invalid Data"
        });
    }
    else{
        db.todos.remove({

            _id:mongojs.ObjectId(req.params.id)

        },'',function(err,result){

            if(err){
                res.send(err);
            }
            else{
                res.json(result);
            }
        });

    }
});


*/


app.listen(8000,function(){

    console.log('Server started on port 8000');

});
