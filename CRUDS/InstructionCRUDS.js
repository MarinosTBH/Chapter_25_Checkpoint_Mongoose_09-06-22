const Person = require('../Model/Person')

exports.findAll = async(req, res) => {
    try{
        const Persons = await Person.find()
        res.status(200).json(Persons)
    } catch (error) {
        res.status(500).send('could not get contacs')
    }
};

////////////////////////////////////////// TASK 1
//// Create and Save a Record of a Model:

exports.findOne = async (req,res) =>{
    const result = await Person.findOne({"name":"Fransesca"})
    try{
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send('could not get contacs')
    }
}
