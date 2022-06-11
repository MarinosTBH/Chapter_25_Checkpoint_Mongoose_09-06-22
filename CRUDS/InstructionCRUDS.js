//
// UNCOMMENT THE WHOLE FILE JUST ONE TIME 
// CTRL + A THEN ctrl + K + U 
//

////////////////////////////////////////////////////////// 
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

const Person = require('../Model/Person')
////////////////////////////////////////////////////////////
//ALL
exports.findAll = async(req, res) => {
    try{
        const Persons = await Person.find()
        res.status(200).send(Persons)
    } catch (error) {
        console.log(error);
        res.status(500).send('could not get Persons')
    }
};

////////////////////////////////////////// TASK 1
// Create and Save a Record of a Model:

exports.Task1 = async (req,res) =>{
    try{
        const Khouloud = new Person({name : "Khouloud", age :25, favFood: ["Kosksi", "Mloukhya" ]})
        const found = await Person.findOne({Khouloud})
        if (found)  {return res.status(400).send(`${Khouloud} is already exists`)} 

        
        await Khouloud.save()     

        
        res.status(200).json(Khouloud)
    } catch (error) {
        console.log(error);
        res.status(500).send({msg:'could not get Persons'})
    }
}
////////////////////////////////////////// TASK 2
// Create Many Records with model.create()
exports.Task2 = async (req,res) =>{
   const ArrayOfPeople = [
        {name : "Fransesca", age :19, favFood: ["Pasta a la fromaggio"]},
        {name : "Cristiano", age :34, favFood: ["chakchouka" ]},
        {name : "Me7rzya", age :99, favFood: ["ma tekelsh"]},
        {name : "Faten", age :30, favFood: ["chapati "]},
        {name : "Seif", age :30, favFood: ["ma9loub"]},
        {name : "Mary", age :30, favFood: ["Burritos"]},
        {name : "Maryy", age :30, favFood: ["ma9loub"]},
        {name : "Unknown", age :50, favFood: ["Unknown food"]}
    ]
    Person.create(ArrayOfPeople, function (err, data) {
        if (err) {
        return err;
        }
        console.log(data);
    });
    try{
        res.status(200).json(ArrayOfPeople)
    } catch (error) {
        console.log(error);
        res.status(500).send({msg:'could not get Persons'})
    }
}
///////////////////////////////////////////////// TASK 3
//Use model.find() to Search Your Database
// i used age because name is unique
exports.Task3 = async(req,res) => {
    try {
        const result = await Person.find({age: 30 })
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).send({msg:'could not get Persons'})
    }

}
///////////////////////////////////////////////// TASK 4
//Use model.findOne() to Return a Single Matching Document from Your Database
exports.Task4 = async(req,res) => {
    try {
        const result = await Person.findOne({favFood : "Pasta a la fromaggio" })
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).send({msg:'could not get Persons'})
    }
}
///////////////////////////////////////////////// TASK 5
//Use model.findOne() to Return a Single Matching Document from Your Database
exports.Task5 = (req,res) => {
        Person.findById("62a4fee2b8d095b9f8767912")
        .then((data)=> res.json(data))
        .catch((err)=> {
            console.log(err);
            res.status(500).json({msg:'could not get Persons'});
        })}

///////////////////////////////////////////////// TASK 6
//Perform Classic Updates by Running Find, Edit, then Save
exports.Task6 = async(req,res) => {

    Person.findById("62a4fee2b8d095b9f8767912")
    .then((data)=> {
        data.favFood.push('Hamburger')
        data.save()
        res.json(data)})
        
    .catch((e)=> res.json(e))
}
///////////////////////////////////////////////// TASK 7
//Use model.findOne() ////Perform New Updates on a Document Using model.findOneAndUpdate() to Return a Single Matching Document from Your Database
exports.Task7 = async(req,res) => {
    try {
        const result = await Person.findOneAndUpdate({name: 'Fransesca'}, {age:21}, {new:true})
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).send({msg:'could not get Persons'})
    }
}
///////////////////////////////////////////////// TASK 8
//Delete One Document Using model.findByIdAndRemove
exports.Task8 = async(req,res) => {
    try {
        const beforeD = await Person.findById("62a39734be76f9f3a5c31b6c")    // id for testing
        const result = await Person.findByIdAndRemove("62a39734be76f9f3a5c31b6c") // id for testing
        res.status(200).json(`Before : ${beforeD} & after :  ${result}`)
    } catch (error) {
        console.log(error);
        res.status(500).send({msg:'could not get Persons'})
    }
}
///////////////////////////////////////////////// TASK 9
//MongoDB and Mongoose - Delete Many Documents with model.remove()
exports.Task9 = async(req,res) => {
    try {
        const result = await Person.remove({age: 30})
        ////To remove just the first document that matches conditions, set the single option to true.
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).send({msg:'could not get Persons'})
    }
}


//////////////////////////////////////////////// TASK 10
// Chain Search Query Helpers to Narrow Search Results
exports.Task10= (req,res)=>{
    Person.find({favFood:"chakchouka"})
    .sort({ name: 1 })
    .limit(2)
    .select({ age: 0 })
    .exec()
    .then((data)=> res.json(data))
    .catch((err)=> {
        console.log(err);
        res.status(500).json({msg:'could not get Persons'});
})
};