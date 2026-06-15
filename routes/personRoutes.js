const express=require('express');
const router=express.Router();
const Person = require('./../models/person');

router.get('/', async (req, res) => {
  try{
    const persons = await Person.find();
    res.json(persons); // jb koi /person pr get request bhejega to usse pura person ka data milega
  } catch(error){
    res.status(500).json({ error: 'internal server error' }); // jb koi error aayega to usse ye milega
  }

})


router.post('/', async (req, res) => {
    try {
 
          const data = req.body; // post request me data ko body se le rhe h

          const newPerson =new Person(data);
          // save the new person to the database
          const response = await newPerson.save();
          console.log('data saved successfully', response);
          res.status(200).json(response); // jb koi /person pr post request bhejega to usse ye milega

        } catch (error) {
  
      console.log(error);
      res.status(500).json({ error: 'internal server error' }); // jb koi error aayega to usse ye milega
      
    }
 
})

router.get('/', async(req, res)=> {
  try {
        const data=await Person.find();
        console.log('data fetched',data);
        res.status(200).json(data);

  } catch(error) {
        console.log(error);
        res.status(500).json({ error: 'internal server error' }); 

  }
}
)

router.get('/:workType',async (req,res)=>{
   try{ 
    const workType= req.params.workType;
    if (workType=='chef'|| workType=='manager'|| workType=='waiter'|| workType=='cleaner')
    {
      const response=await Person.find({work:workType});
      console.log("response fetched",response);
      res.status(200).json(response);
   }
   else{
        res.status(404).json({error: 'invalid work type'});
   }

   } catch(error){
      console.log(error);
      res.status(500).json({error:'internal server error'});
   }
})

router.put('/:id',async(req,res)=>{
  try{
       const personId=req.params.id; //extract the id from the url parameter
       const updatedPersonData=req.body; //extract that unupdated data
       const response=await Person.findByIdAndUpdate(personId,updatedPersonData,{
          new:true,
          runValidators:true
        });

        if(!response){
          return res.status(404).json({error:'person not found'}); // jb koi aisa id dega jo database me nahi hoga to usse ye milega 
        }
        
       console.log('data updated successfully',response);
       res.status(200).json(response); // jb koi /person/:id pr put request bhejega to usse ye milega   

  } catch(error)
{
      console.log(error);
      res.status(500).json({error:'internal server error'}); // jb koi error aayega to usse ye milega   

}
}
)

router.delete('/:id', async(req,res)=>{
  try{
       const personId=req.params.id;
       const response=await Person.findByIdAndDelete(personId);

       if(!response){
          return res.status(404).json({error:'person not found'}); // jb koi aisa id dega jo database me nahi hoga to usse ye milega 
        }
        console.log('person deleted successfully',response);
        res.status(200).json(response); // jb koi /person/:id pr delete request bhejega to usse ye milega         
      } 
      catch(error){
        console.log("person deletion failed",error);
        res.status(500).json({error:'internal server error'}); // jb koi error aayega to usse ye milega
        

      }

    })
module.exports=router;

