const expressAsyncHandler = require("express-async-handler");


//@desc get Goal
//Route  Get/api/goals
//Access Private
const getGoal = expressAsyncHandler( async (req, res) => {
    if (!req.body.text) {
         res.status(400)
        throw new Error("Please add a text field")

      }
    
      res.status(200).json({
       message:"get all goals"
      });
   
  
})


//@desc Update Goal
//Route  Put /api/goals
//Access Private
const postGoal = expressAsyncHandler( async (req, res) => {
    res.status(200).json({message:"Set goal"})
}

)

//@desc Put Goal
//Route  PUT /api/goals
//Access Private
const updateGoal = expressAsyncHandler( async (req, res) => {
    res.status(200).json({message:`Put a goal ${req.params.id}`})
})


//@desc Delete Goal
//Route  Delete/api/goals
//Access Private
const deleteGoal = expressAsyncHandler( async (req, res) => {
    res.status(200).json({message:`Delate a goal ${req.params.id}`})
   
})





module.exports = {
    getGoal,
    postGoal,
    updateGoal,
    deleteGoal
}