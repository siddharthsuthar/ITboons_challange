
 var mongo = require('mongodb').MongoClient;


function afterRegister(req,res){

    var myobj = { name: req.body.name , username: req.body.username, email:req.body.email , password: req.body.password };

    mongo.connect('mongodb://localhost:27018,localhost:27019,localhost:27020/test?replicaSet=itboons&readPreference=secondaryPreferred',function(err,db){
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.collection("customers").insertOne(myobj, function(err, result) {
            if (err) {
                db.close();
                res.send({message:"error creating user", status:401})
            }
            else {
                db.close();
                res.send({message: "UserCreated", status: 201})
            }

        });
    })

}

//logout function

function logout(req,res){

	req.session.destroy();
    res.status(201).send();

}


 //sign in function

function loginPassport(req,res,next){

    var username = req.query.username;
    var password = req.query.password;
    mongo.connect('mongodb://localhost:27018,localhost:27019,localhost:27020/test?replicaSet=itboons&readPreference=secondaryPreferred',function(err,db){
        if (err) throw err;
        var dbo = db.db("mydb");

        dbo.collection("customers").findOne({username: username, password:password},function(err, result) {
            if (err) throw err;
            console.log("***********")
            console.log(result);
            console.log("***********")
            db.close();
            res.send({status:201,message:"succesfully logged in"});

        });
    })

}




exports.logout =logout;
exports.loginPassport = loginPassport;
exports.afterRegister = afterRegister;
