//INSTRUCTION : Installing and setting up Mongoose:

////////////////////////////////////////////////////////////////////////
const express = require('express') // Express
const mongoose = require('mongoose') // Mongoose
const fs = require('fs')
const path = require("path");

const connected = require('./Connection/Connected') //connection config 
const Person = require('./Model/Person')  //Person 

const {findAll, Task1, Task2, Task3, Task4, Task5, Task6,Task7,Task8,Task9,Task10} = require('./CRUDS/InstructionCRUDS') //some controllers

require('dotenv').config()
    // Require full path if not working require("dotenv").config({ path: "./.env" });
    // console.log(process.env)  remove this after you've confirmed it working
/////////////////////////////////////////////////////////////////////////

// Init express app 
const app = express()
const port  = process.env.port || 3000

//Connection
connected()

//main view 
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, "views", "index.html"));  
})

//make some routes
app.get("/All", findAll);
app.get("/Task1", Task1);
app.get("/Task2", Task2);
app.get("/Task3", Task3);
app.get("/Task4", Task4);
app.get("/Task5", Task5);
app.get("/Task6", Task6);
app.get("/Task7", Task7);
app.get("/Task8", Task8);
app.get("/Task9", Task9);
app.get("/Task10", Task10);

// ....

//listen to port
app.listen(port, ()=> 
    console.log(`#########################\nServer started on PORT ${port}\n#########################`))















































//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//THE END


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CRUDS CRUDS CRUDS CRUDS CRUDS CRUDS CRUDS CRUDS CRUDS CRUDS
////////////////////////////////////////// TASK 1
//// Create and Save a Record of a Model:

// const createAndSavePerson = function(done) {
//     const Mary = new Person({name : "Mary", age :19, favFood: ["Pasta a la pesto"]})
//     Mary.save(function(error,data) {
//         if (error)  {return done(error )} 
//         else        {done(null,data)}
//         console.log(Mary)
//     })
// }
// createAndSavePerson()


////////////////////////////////////////// TASK 2
// // Create Many Records with model.create()

    // const ArrayOfPeople = [
    //     {name : "Fransesca", age :19, favFood: ["Pasta a la fromaggio"]},
    //     {name : "Cristiano", age :34, favFood: ["chakchouka" ]},
    //     {name : "Me7rzya", age :99, favFood: ["ma tekelsh"]},
    //     {name : "Faten", age :30, favFood: ["chapati "]},
    //     {name : "Seif", age :30, favFood: ["ma9loub"]},
    //     {name : "Mary", age :30, favFood: ["ma9loub"]},
    //     {name : "Maryy", age :30, favFood: ["ma9loub"]},
    //     {name : "Unknown", age :50, favFood: ["Unknown food"]}
    // ]
    // Person.create(ArrayOfPeople, function (err, data) {
    //     if (err) {
    //     console.log(err);
    //     }
    //     console.log(data);
    //         //else {console.log(`Done: People created with createMany: \n${{$unwind:ArrayOfPeople}}`);}
    // });


////////////////////////////////////////// TASK 3
//Use model.find() to Search Your Database

    // Person.findOne({"name":"Fransesca"},(err,data)=>{
    //     if (err)    {console.log(err)}
    //     else        {console.log( `Found by name : \n${data}`)}
    // })


////////////////////////////////////////// TASK 4
// //Use model.findOne() to Return a Single Matching Document from Your Database

    // Person.findOne({favFood : "Pasta a la fromaggio" }, (err,data) =>{
    //     if (err)    {console.log(err)}
    //     else        {console.log( `Found by favFood : \n${data}`)}
    // })


////////////////////////////////////////// TASK 5
// //Use model.findById() to Search Your Database By _id

    // Person.findOne({_id:"62a1fd179a2c214149de4b3b"}, (err,data)=>{
    //     if (err)    {console.log(err)}
    //     else        {console.log( `Found by findById : \n${data}`)}
    // })


////////////////////////////////////////// TASK 6
// //Perform Classic Updates by Running Find, Edit, then Save

    // Person.findById({_id: "62a201a985446dde50ac198c"}, (err,pers)=>{
    //     if (err) {return console.log(err)}
    //     else {
    //         pers.favFood.push("hamburger")
    //         pers.save()
    //         console.log("Modified and pushed "+pers)
    //     }
    // })


////////////////////////////////////////// TASK 7
////Perform New Updates on a Document Using model.findOneAndUpdate()

    //   Person.findOneAndUpdate({name:"Fransesca"},{age:21},{new:true}, (err,pers)=>{
    //         if (err) {return console.log(err)}
    //         else {
    //             console.log("Found and updated "+pers)
    //         }
    //   })


////////////////////////////////////////// TASK 8
////Delete One Document Using model.findByIdAndRemove

    //  Person.findByIdAndRemove({_id:"62a39734be76f9f3a5c31b6b"}, (err,pers)=>{
    //         if (err) {return console.log(err)}
    //         else {
    //             console.log("Found and deleted "+pers)
    //         }
    //  })


////////////////////////////////////////// TASK 9
////MongoDB and Mongoose - Delete Many Documents with model.remove()

    // var removeManyPeople = function(done) {
    //     Person.deleteMany({name: "Mary"}, (err, data)=> {
    //         err ? done(err) : done(null,data)
    //         }
    //     )
    // };
    // removeManyPeople()
    //it works but throws an error
// =================================> this node:events:505 
                                        // throw er; 
                                        // // Unhandled 'error' event ^ 
                                        // TypeError: done is not a function


////////////////////////////////////////// TASK 10
////Chain Search Query Helpers to Narrow Search Results


// var searchQueryChain = function(done){
//     var foodToSearch ='burrito'
//         Person.find({favFood : {$all: [foodToSearch]}})
//         .sort({ name: 'asc'})
//         .limit(2)
//         .select('-age')
//         .exec((err,data)=>{
//             if (err){ 
//                 console.log(err)} 
//             else {
//                 done(null, data)
//             }
//         })
//     }


    
//=================================================> why done is not a function










////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//DONT'T TOUCH THIS
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console log all
    Person.find((err,data)=>{
        if (err) {return console.log(err)}
        else {console.log(`###############################################\nHere are ou Persons : (${data.length})
            \n____________\n ${data}`)}
    })

// __v : 0 , The versionKey is a property set on each document when first created by Mongoose. This keys value contains the internal revision of the document. The name of this document property is configurable. The default is __v. Med amine terbah