const express = require('express');
const router = express.Router();
const Person = require('./../models/person'); // Adjusted path to import Person correctly

// GET all persons
router.get('/', async (req, res) => {
  try {
    const data = await Person.find();
    console.log('data received');
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'internal server' });
  }
});

// POST a new person
router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data); // Creates a new instance with request data
    const response = await newPerson.save(); // Saves it to the database
    console.log('data saved');
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'internal server' });
  }
});

// GET persons by work type
router.get('/:konsakaam', async (req, res) => {
  try {
    const konsakaam = req.params.konsakaam;
    if (konsakaam === 'bawarchi' || konsakaam === 'companykamaalik' || konsakaam === 'naukar') {
      const response = await Person.find({ work: konsakaam });
      console.log('response mil gaya bhai');
      res.status(200).json(response);
    } else {
      res.status(400).json({ error: 'Invalid work type' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'gadbad ho gay' });
  }
});

router.put('/:id' , async(req, res) => {//isme hum update kar rhe hai or haa '/:id' yeh jo naam hai yeh req.param ke
 try{                                   //baad bhi hi naam hina chiyeh aisa nhi kii tu uch orr likh dee thoda naamo
  const personId = req.params.id        // ka dhyaan rakhna betaa 
  const update = req.body;
  const response = await Person.findByIdAndUpdate(personId , update , {
              new: true,
              runValidators : true 
 
  });
  if(!response){
   return  res.status(404).json({error: 'banda hi nhi mila bhai'});
  }
  console.log('data updated');
  res.status(200).json(response);

 }catch(err){
      console.log(err)
      res.status(500).json({error: 'data update nhi kar paai'});
 }

})
router.delete('/:id' , async(req, res) => {
  try{                                   
   const personId = req.params.id      
   const response = await Person.findByIdAndDelete(personId)
               
   if(!response){
    return  res.status(404).json({error: 'banda nhi mill payyooo'});
   }
   console.log('data delted');
   res.status(200).json({message : 'delete ho gaya succesfully'});
 
  }catch(err){
       console.log(err)
       res.status(500).json({error: 'data delete nho kar paai'});
  }
 
 })
module.exports = router;
