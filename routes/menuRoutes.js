const express = require('express');
const router = express.Router();
const MenuItem = require('./../menu'); // importing the schema for the menu item collection from the menu.js file

router.post('/',async (req,res) =>
    { 
      try {
        const data = req.body;
        const newMenuItem = new MenuItem(data);
        const response= await newMenuItem.save();
        console.log('menu item saved successfully', response);
        res.status(200).json(response); // jb koi /menu pr post request bhejega to usse ye milega
        

      } catch(error) { 
        console.log(error);
        res.status(500).json({ error: 'internal server error' }); // jb koi error aayega to usse ye milega

    }

  }

)

router.get('/:taste', async(req,res)=>{
   try { 
       if (req.params.taste=='sweet' || req.params.taste=='spicy' || req.params.taste=='sour' || req.params.taste=='salty')
       {
            const taste=req.params.taste;
            const response= await MenuItem.find({taste:taste});
            console.log('menu item fetched',response);
            res.status(200).json(response);
       }
       else{
            res.status(404).json({error: 'invalid taste type'});
       }

   }catch(error){
     console.log(error);
     res.status(500).json({error: 'internal server error'});
     
   }


})

router.get('/', async(req,res)=>{
   try { const data= await MenuItem.find();
     console.log('menu data fetched',data);
     res.status(200).json(data);


   }catch(error){
     console.log(error);
     res.status(500).json({error: 'internal server error'});
     
   }


})


router.put('/:id', async(req,res)=>{
  try{
    const id=req.params.id;
    const updatedData=req.body;
    const response= await MenuItem.findByIdAndUpdate(id,updatedData,{
      new:true,
      runValidators:true,
    });
     console.log('menu item updated successfully',response);
     res.status(200).json(response); // jb koi /menu/:id pr put request bhejega to usse ye milega  
      
     if(!response){
        return res.status(404).json({error:'menu item not found'}); // jb koi aisa id dega jo database me nahi hoga to usse ye milega
     }
  }catch(error){
      console.log(error);
      res.status(500).json({error: 'internal server error'});


  }
}
)

router.delete('/:id', async(req,res)=>{
  try{
    const id=req.params.id;
    const response= await MenuItem.findByIdAndDelete(id);
    console.log('menu item deleted successfully',response);
    res.status(200).json(response); // jb koi /menu/:id pr delete request bhejega to usse ye milega       
  }catch(error){
      console.log(error);
      res.status(500).json({error: 'internal server error'});   
  }

})

module.exports= router;
