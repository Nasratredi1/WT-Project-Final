import postMassage from '../models/postMassage.js';

export const getPosts = async((req, res) => {
   // res.send('THIS WORKS!');   //  each callback fun have try and catch block
   try { // code in the try run on that time when everything is successful
      const postMassages =  await postMessage.find();   
      
      //console.log(postMassages);

      res.log(200).json(postMessages)
    } catch(error){// if we get an error the then catch is run
     res.status(404).json({message: error.message});
   }
}

export const createPost = (req , res) => {
    res.send('Post Creattion');
}