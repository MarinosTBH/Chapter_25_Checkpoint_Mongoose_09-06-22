//INSTRUCTION : Installing and setting up Mongoose:

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const express = require('express') // Express
const mongoose = require('mongoose') // Mongoose
const connected = require('./Connection/Connected')
const Person = require('./Model/Person')  //Person 
const fs = require('fs')
const path = require("path");

require('dotenv').config()
    // Require full path if not working require("dotenv").config({ path: "./.env" });
    // console.log(process.env)  remove this after you've confirmed it working
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Init express app 
const app = express()
const port  = process.env.port || 3000
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "views", "index.html"));
  });
app.listen(port, ()=> 
    console.log(`#########################\nServer started on PORT ${port}\n#########################`))

//Connection
connected()
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////// TASK 1
//// Create and Save a Record of a Model:

    // const Fransesca = new Person({name : "Fransesca", age :19, favFood: ["Pasta a la fromaggio"]})

    // Fransesca.save((error,data) => {
    //     if (error)  {console.log(error +" This name already exists")} 
    //     else        {console.log(`1st record create : \n${Fransesca}`)}
    // })

////////////////////////////////////////// TASK 2
// // Create Many Records with model.create()

    // const ArrayOfPeople = [
    //     {name : "Fransesca", age :19, favFood: ["Pasta a la fromaggio"]},
    //     {name : "Cristiano", age :34, favFood: ["chakchouka" ]},
    //     {name : "Me7rzya", age :99, favFood: ["Mita b char"]},
    //     {name : "Faten", age :30, favFood: ["chapati lil w nhar"]},
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

    //  Person.findByIdAndRemove({_id:"62a201a985446dde50ac198c"}, (err,pers)=>{
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

////////////////////////////////////////// TASK 9
////Chain Search Query Helpers to Narrow Search Results


    // var chainSearchQuery = function(done) {
    //     Person.find({favFood: "chakchouka"}).sort({ name: 1}).limit(2).select({age:-1}).exec((err, data)=> {
    //         err ? done(err) : done(null,data)
    //         }
    //     )
    // };
    // chainSearchQuery()
//=================================================> same error w eni bdit nfed






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//DONT'T TOUCH THIS
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//// find all 
    Person.find((err,data)=>{
        if (err) {return console.log(err)}
        else {console.log(`###############################################\nHere are ou Persons : (${data.length})
            \n____________\n ${data}`)}
    })

//Create person
// run()
// async function run(){
//     try{
//         const person = await Person.create({
//             name: "Med Amine ", 
//             age : 26, 
//             favFood: ["Rice", "Pizza", "Brouklou mo9li w sa3at matboukh"] 
//         })
//         console.log(person)
//     } catch(e) {
//         console.log(e.message)
//     }
// }

// __v : 0 , The versionKey is a property set on each document when first created by Mongoose. This keys value contains the internal revision of the document. The name of this document property is configurable. The default is __v.