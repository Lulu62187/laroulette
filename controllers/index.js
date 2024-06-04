const Student = require("../models/students");


const getRandomStudent = (array) => {

    const random = Math.floor(Math.random()*array.length);
    
    return array[random]

}


const controllerStudent = {
    random:async(req, res) => {
        const data = await Student.findAll();
        console.log(data);
        const randomStudent = getRandomStudent(data);
        res.status(200).json({ laroulette : randomStudent });
    },
    create: async (req, res) => {
        console.log(req.body);
        const data = await Student.create(req.body);
        console.log(data);
        res.status(201).json({ message: "l'etudiant à été ajoutée", data: req.body });

    },
    findAll :  async (req, res) =>{
        const data = await Student.findAll();
        res.status(200).json({students : data});

    }





}
module.exports=controllerStudent